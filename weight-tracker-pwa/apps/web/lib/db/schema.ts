import Dexie, { Table } from 'dexie';
import type {
  User,
  Profile,
  Weight,
  Meal,
  MealItem,
  AlcoholLog,
  Activity,
  Scenario,
} from '@weight-tracker/schemas';

// Offline-first database schema
export interface LocalDB extends Dexie {
  users: Table<User>;
  profiles: Table<Profile>;
  weights: Table<Weight>;
  meals: Table<Meal>;
  mealItems: Table<MealItem>;
  alcoholLogs: Table<AlcoholLog>;
  activities: Table<Activity>;
  scenarios: Table<Scenario>;
  syncQueue: Table<SyncQueueItem>;
}

export interface SyncQueueItem {
  id?: number;
  tableName: string;
  operation: 'create' | 'update' | 'delete';
  recordId: string;
  data: any;
  timestamp: Date;
  synced: boolean;
}

export const db = new Dexie('WeightTrackerDB') as LocalDB;

db.version(1).stores({
  users: 'id, email',
  profiles: 'userId',
  weights: 'id, userId, date',
  meals: 'id, userId, loggedAt',
  mealItems: 'id, mealId',
  alcoholLogs: 'id, userId, date',
  activities: 'id, userId, date',
  scenarios: 'id, userId',
  syncQueue: '++id, tableName, synced, timestamp',
});