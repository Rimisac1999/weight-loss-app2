import { db } from './schema';
import { supabase } from '../supabase/client';

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
      .equals(false)
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

    let result;
    switch (operation) {
      case 'create':
        result = await supabase.from(tableName).insert(data);
        break;
      case 'update':
        result = await supabase.from(tableName).update(data).eq('id', recordId);
        break;
      case 'delete':
        result = await supabase.from(tableName).delete().eq('id', recordId);
        break;
    }

    if (result?.error) {
      throw result.error;
    }

    // Mark as synced
    await db.syncQueue.update(item.id!, { synced: true });
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
      synced: false,
    });
  }
}

export const syncManager = new SyncManager();