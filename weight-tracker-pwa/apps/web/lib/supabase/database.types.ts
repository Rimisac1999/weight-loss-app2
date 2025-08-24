export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      profiles: {
        Row: {
          user_id: string
          sex: 'male' | 'female'
          birth_year: number
          height_cm: number
          activity_level: 'sedentary' | 'light' | 'moderate' | 'high' | 'athlete'
          stride_cm: number | null
          preferred_units: 'metric' | 'imperial'
        }
        Insert: {
          user_id: string
          sex: 'male' | 'female'
          birth_year: number
          height_cm: number
          activity_level: 'sedentary' | 'light' | 'moderate' | 'high' | 'athlete'
          stride_cm?: number | null
          preferred_units: 'metric' | 'imperial'
        }
        Update: {
          user_id?: string
          sex?: 'male' | 'female'
          birth_year?: number
          height_cm?: number
          activity_level?: 'sedentary' | 'light' | 'moderate' | 'high' | 'athlete'
          stride_cm?: number | null
          preferred_units?: 'metric' | 'imperial'
        }
      }
      weights: {
        Row: {
          id: string
          user_id: string
          date: string
          weight_kg: number
          note: string | null
        }
        Insert: {
          id?: string
          user_id: string
          date: string
          weight_kg: number
          note?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          date?: string
          weight_kg?: number
          note?: string | null
        }
      }
      meals: {
        Row: {
          id: string
          user_id: string
          logged_at: string
          source: 'manual' | 'photo'
          total_kcal: number
          protein_g: number
          carbs_g: number
          fat_g: number
          ai_confidence_pct: number | null
          photo_url: string | null
          raw_ai: Json | null
        }
        Insert: {
          id?: string
          user_id: string
          logged_at: string
          source: 'manual' | 'photo'
          total_kcal: number
          protein_g: number
          carbs_g: number
          fat_g: number
          ai_confidence_pct?: number | null
          photo_url?: string | null
          raw_ai?: Json | null
        }
        Update: {
          id?: string
          user_id?: string
          logged_at?: string
          source?: 'manual' | 'photo'
          total_kcal?: number
          protein_g?: number
          carbs_g?: number
          fat_g?: number
          ai_confidence_pct?: number | null
          photo_url?: string | null
          raw_ai?: Json | null
        }
      }
      meal_items: {
        Row: {
          id: string
          meal_id: string
          name: string
          grams: number | null
          kcal: number
          protein_g: number
          carbs_g: number
          fat_g: number
          confidence_pct: number | null
        }
        Insert: {
          id?: string
          meal_id: string
          name: string
          grams?: number | null
          kcal: number
          protein_g: number
          carbs_g: number
          fat_g: number
          confidence_pct?: number | null
        }
        Update: {
          id?: string
          meal_id?: string
          name?: string
          grams?: number | null
          kcal?: number
          protein_g?: number
          carbs_g?: number
          fat_g?: number
          confidence_pct?: number | null
        }
      }
      alcohol_logs: {
        Row: {
          id: string
          user_id: string
          date: string
          type: 'beer_pint' | 'wine_bottle' | 'custom'
          volume_ml: number
          abv_pct: number
          kcal_est: number
        }
        Insert: {
          id?: string
          user_id: string
          date: string
          type: 'beer_pint' | 'wine_bottle' | 'custom'
          volume_ml: number
          abv_pct: number
          kcal_est: number
        }
        Update: {
          id?: string
          user_id?: string
          date?: string
          type?: 'beer_pint' | 'wine_bottle' | 'custom'
          volume_ml?: number
          abv_pct?: number
          kcal_est?: number
        }
      }
      activities: {
        Row: {
          id: string
          user_id: string
          date: string
          z2_minutes: number
          resistance_minutes: number
          steps: number
          floors: number
          notes: string | null
        }
        Insert: {
          id?: string
          user_id: string
          date: string
          z2_minutes?: number
          resistance_minutes?: number
          steps?: number
          floors?: number
          notes?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          date?: string
          z2_minutes?: number
          resistance_minutes?: number
          steps?: number
          floors?: number
          notes?: string | null
        }
      }
      scenarios: {
        Row: {
          id: string
          user_id: string
          name: string
          delta_kcal_per_day: number
          z2_min_per_day: number
          resistance_min_per_day: number
          steps_per_day: number
          floors_per_day: number
          start_date: string
          horizon_weeks: number
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          delta_kcal_per_day: number
          z2_min_per_day: number
          resistance_min_per_day: number
          steps_per_day: number
          floors_per_day: number
          start_date: string
          horizon_weeks: number
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          delta_kcal_per_day?: number
          z2_min_per_day?: number
          resistance_min_per_day?: number
          steps_per_day?: number
          floors_per_day?: number
          start_date?: string
          horizon_weeks?: number
        }
      }
      settings: {
        Row: {
          user_id: string
          ai_mode: 'hosted' | 'byok'
          byok_hint_set: boolean
          locale: string | null
        }
        Insert: {
          user_id: string
          ai_mode?: 'hosted' | 'byok'
          byok_hint_set?: boolean
          locale?: string | null
        }
        Update: {
          user_id?: string
          ai_mode?: 'hosted' | 'byok'
          byok_hint_set?: boolean
          locale?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}