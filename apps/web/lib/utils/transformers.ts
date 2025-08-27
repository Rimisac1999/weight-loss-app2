/**
 * Data transformation utilities for converting between camelCase (TypeScript/Zod) 
 * and snake_case (Supabase/PostgreSQL) naming conventions.
 */

// Transform camelCase to snake_case for Supabase
export function toSnakeCase(data: any, tableName: string) {
  switch (tableName) {
    case 'profiles':
      return {
        user_id: data.userId,
        sex: data.sex,
        birth_year: data.birthYear,
        height_cm: data.heightCm,
        activity_level: data.activityLevel,
        stride_cm: data.strideCm,
        preferred_units: data.preferredUnits,
      };
    case 'weights':
      return {
        user_id: data.userId,
        date: data.date,
        weight_kg: data.weightKg,
        note: data.note,
      };
    case 'meals':
      return {
        user_id: data.userId,
        logged_at: data.loggedAt,
        source: data.source,
        total_kcal: data.totalKcal,
        protein_g: data.proteinG,
        carbs_g: data.carbsG,
        fat_g: data.fatG,
        ai_confidence_pct: data.aiConfidencePct,
        photo_url: data.photoUrl,
        raw_ai: data.rawAi,
      };
    case 'meal_items':
      return {
        meal_id: data.mealId,
        name: data.name,
        grams: data.grams,
        kcal: data.kcal,
        protein_g: data.proteinG,
        carbs_g: data.carbsG,
        fat_g: data.fatG,
        confidence_pct: data.confidencePct,
      };
    case 'alcohol_logs':
      return {
        user_id: data.userId,
        date: data.date,
        type: data.type,
        volume_ml: data.volumeMl,
        abv_pct: data.abvPct,
        kcal_est: data.kcalEst,
      };
    case 'activities':
      return {
        user_id: data.userId,
        date: data.date,
        z2_minutes: data.z2Minutes,
        resistance_minutes: data.resistanceMinutes,
        steps: data.steps,
        floors: data.floors,
        notes: data.notes,
      };
    case 'scenarios':
      return {
        user_id: data.userId,
        name: data.name,
        delta_kcal_per_day: data.deltaKcalPerDay,
        z2_min_per_day: data.z2MinPerDay,
        resistance_min_per_day: data.resistanceMinPerDay,
        steps_per_day: data.stepsPerDay,
        floors_per_day: data.floorsPerDay,
        start_date: data.startDate,
        horizon_weeks: data.horizonWeeks,
      };
    case 'settings':
      return {
        user_id: data.userId,
        ai_mode: data.aiMode,
        byok_hint_set: data.byokHintSet,
        locale: data.locale,
      };
    default:
      return data;
  }
}

// Transform snake_case to camelCase from Supabase
export function toCamelCase(data: any, tableName: string) {
  switch (tableName) {
    case 'profiles':
      return {
        userId: data.user_id,
        sex: data.sex,
        birthYear: data.birth_year,
        heightCm: data.height_cm,
        activityLevel: data.activity_level,
        strideCm: data.stride_cm,
        preferredUnits: data.preferred_units,
      };
    case 'weights':
      return {
        id: data.id,
        userId: data.user_id,
        date: data.date,
        weightKg: data.weight_kg,
        note: data.note,
      };
    case 'meals':
      return {
        id: data.id,
        userId: data.user_id,
        loggedAt: data.logged_at,
        source: data.source,
        totalKcal: data.total_kcal,
        proteinG: data.protein_g,
        carbsG: data.carbs_g,
        fatG: data.fat_g,
        aiConfidencePct: data.ai_confidence_pct,
        photoUrl: data.photo_url,
        rawAi: data.raw_ai,
      };
    case 'meal_items':
      return {
        id: data.id,
        mealId: data.meal_id,
        name: data.name,
        grams: data.grams,
        kcal: data.kcal,
        proteinG: data.protein_g,
        carbsG: data.carbs_g,
        fatG: data.fat_g,
        confidencePct: data.confidence_pct,
      };
    case 'alcohol_logs':
      return {
        id: data.id,
        userId: data.user_id,
        date: data.date,
        type: data.type,
        volumeMl: data.volume_ml,
        abvPct: data.abv_pct,
        kcalEst: data.kcal_est,
      };
    case 'activities':
      return {
        id: data.id,
        userId: data.user_id,
        date: data.date,
        z2Minutes: data.z2_minutes,
        resistanceMinutes: data.resistance_minutes,
        steps: data.steps,
        floors: data.floors,
        notes: data.notes,
      };
    case 'scenarios':
      return {
        id: data.id,
        userId: data.user_id,
        name: data.name,
        deltaKcalPerDay: data.delta_kcal_per_day,
        z2MinPerDay: data.z2_min_per_day,
        resistanceMinPerDay: data.resistance_min_per_day,
        stepsPerDay: data.steps_per_day,
        floorsPerDay: data.floors_per_day,
        startDate: data.start_date,
        horizonWeeks: data.horizon_weeks,
      };
    case 'settings':
      return {
        userId: data.user_id,
        aiMode: data.ai_mode,
        byokHintSet: data.byok_hint_set,
        locale: data.locale,
      };
    default:
      return data;
  }
}

// Helper function to transform arrays of data
export function transformArray(data: any[], tableName: string, direction: 'toSnake' | 'toCamel') {
  if (direction === 'toSnake') {
    return data.map(item => toSnakeCase(item, tableName));
  } else {
    return data.map(item => toCamelCase(item, tableName));
  }
}
