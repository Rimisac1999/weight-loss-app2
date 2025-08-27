import { db } from './schema';
import { supabase } from '../supabase/client';
import { toSnakeCase } from '../utils/transformers';

export class SyncManager {
  private syncInterval: NodeJS.Timeout | null = null;

  async startSync(intervalMs = 30000) {
    // Initial sync
    await this.syncAll();

    // Set up periodic sync
    this.syncInterval = setInterval(() => {
      this.syncAll();
    }, intervalMs);

    // Sync on online event
    window.addEventListener('online', () => {
      this.syncAll();
    });
  }

  stopSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
  }

  async syncAll() {
    if (!navigator.onLine) return;

    const pendingItems = await db.syncQueue
      .where('synced')
      .equals(0)
      .toArray();

    for (const item of pendingItems) {
      try {
        await this.syncItem(item);
      } catch (error) {
        console.error('Sync error:', error);
      }
    }
  }

  private async syncItem(item: any) {
    const { tableName, operation, recordId, data } = item;

    // Transform camelCase to snake_case for Supabase
    const transformedData = toSnakeCase(data, tableName);

    let result;
    switch (operation) {
      case 'create':
        result = await supabase.from(tableName).insert(transformedData);
        break;
      case 'update':
        result = await supabase.from(tableName).update(transformedData).eq('id', recordId);
        break;
      case 'delete':
        result = await supabase.from(tableName).delete().eq('id', recordId);
        break;
    }

    if (result?.error) {
      throw result.error;
    }

    // Mark as synced
    await db.syncQueue.update(item.id!, { synced: 1 });
  }

  async addToSyncQueue(
    tableName: string,
    operation: 'create' | 'update' | 'delete',
    recordId: string,
    data?: any
  ) {
    await db.syncQueue.add({
      tableName,
      operation,
      recordId,
      data,
      timestamp: new Date(),
      synced: 0,
    });
  }

  // Helper method to sync a specific table
  async syncTable(tableName: string) {
    const pendingItems = await db.syncQueue
      .where('synced')
      .equals(0)
      .and(item => item.tableName === tableName)
      .toArray();

    for (const item of pendingItems) {
      try {
        await this.syncItem(item);
      } catch (error) {
        console.error(`Sync error for ${tableName}:`, error);
      }
    }
  }

  // Method to manually trigger sync
  async manualSync() {
    console.log('Manual sync triggered');
    await this.syncAll();
  }
}

export const syncManager = new SyncManager();