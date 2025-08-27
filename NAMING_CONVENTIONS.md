# Naming Conventions & Data Transformation Guide

## Overview

This document explains the naming convention system used in the Weight Tracker app and how data is transformed between different layers of the application.

## 🎯 **Naming Convention Strategy**

Our app uses a **hybrid naming convention approach** that maintains the best practices for each technology stack:

- **TypeScript/Zod Schemas**: `camelCase` (JavaScript/TypeScript standard)
- **Supabase/PostgreSQL**: `snake_case` (SQL standard)
- **Data Transformation**: Automatic conversion between the two conventions

## 📚 **Why This Approach?**

### **Benefits:**
1. **TypeScript Best Practices**: Follows JavaScript/TypeScript naming conventions
2. **SQL Best Practices**: Follows PostgreSQL naming conventions
3. **Consistency**: Each layer uses its native convention
4. **Maintainability**: Clear separation of concerns
5. **Scalability**: Easy to add new fields and tables

### **Alternative Approaches Considered:**
- ❌ **All snake_case**: Would violate TypeScript conventions
- ❌ **All camelCase**: Would violate SQL conventions
- ❌ **Mixed conventions**: Would create confusion
- ✅ **Hybrid with transformation**: Best of both worlds

## 🔄 **Data Flow & Transformation**

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Transformation │    │   Supabase      │
│   (camelCase)   │◄──►│   Layer          │◄──►│   (snake_case)  │
│                 │    │                  │    │                 │
│ • Zod Schemas   │    │ • toSnakeCase()  │    │ • PostgreSQL    │
│ • TypeScript    │    │ • toCamelCase()  │    │ • Tables        │
│ • React Forms   │    │ • transformArray()│   │ • RLS Policies  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 📋 **Field Mapping Examples**

### **Profiles Table**

| Supabase Column | Zod Schema Field | Type | Description |
|-----------------|------------------|------|-------------|
| `user_id` | `userId` | `string` | User's unique identifier |
| `sex` | `sex` | `'male' \| 'female'` | Biological sex |
| `birth_year` | `birthYear` | `number` | Year of birth |
| `height_cm` | `heightCm` | `number` | Height in centimeters |
| `activity_level` | `activityLevel` | `ActivityLevel` | Activity level enum |
| `stride_cm` | `strideCm` | `number \| null` | Stride length in cm |
| `preferred_units` | `preferredUnits` | `Units` | Preferred measurement units |

### **Weights Table**

| Supabase Column | Zod Schema Field | Type | Description |
|-----------------|------------------|------|-------------|
| `id` | `id` | `string` | Unique weight record ID |
| `user_id` | `userId` | `string` | User's unique identifier |
| `date` | `date` | `Date` | Date of weight measurement |
| `weight_kg` | `weightKg` | `number` | Weight in kilograms |
| `note` | `note` | `string \| null` | Optional note |

### **Meals Table**

| Supabase Column | Zod Schema Field | Type | Description |
|-----------------|------------------|------|-------------|
| `id` | `id` | `string` | Unique meal record ID |
| `user_id` | `userId` | `string` | User's unique identifier |
| `logged_at` | `loggedAt` | `Date` | When the meal was logged |
| `source` | `source` | `MealSource` | How the meal was entered |
| `total_kcal` | `totalKcal` | `number` | Total calories |
| `protein_g` | `proteinG` | `number` | Protein in grams |
| `carbs_g` | `carbsG` | `number` | Carbohydrates in grams |
| `fat_g` | `fatG` | `number` | Fat in grams |
| `ai_confidence_pct` | `aiConfidencePct` | `number \| null` | AI confidence percentage |
| `photo_url` | `photoUrl` | `string \| null` | Photo URL if applicable |
| `raw_ai` | `rawAi` | `any \| null` | Raw AI response data |

## 🛠 **Using the Transformation Functions**

### **Import the Utilities**

```typescript
import { toSnakeCase, toCamelCase, transformArray } from '@/lib/utils/transformers';
```

### **Sending Data to Supabase (camelCase → snake_case)**

```typescript
// Your form data in camelCase
const formData = {
  userId: user.id,
  sex: 'male',
  birthYear: 1990,
  heightCm: 175,
  activityLevel: 'moderate',
  strideCm: 75,
  preferredUnits: 'metric'
};

// Transform to snake_case for Supabase
const supabaseData = toSnakeCase(formData, 'profiles');

// Insert into Supabase
const { data, error } = await supabase
  .from('profiles')
  .insert(supabaseData);
```

### **Receiving Data from Supabase (snake_case → camelCase)**

```typescript
// Fetch data from Supabase (returns snake_case)
const { data: profile } = await supabase
  .from('profiles')
  .select('*')
  .eq('user_id', user.id)
  .single();

// Transform to camelCase for use with Zod schemas
const transformedProfile = toCamelCase(profile, 'profiles');

// Now you can use it with your Zod schemas
const validatedProfile = Profile.parse(transformedProfile);
```

### **Transforming Arrays**

```typescript
// Transform multiple records
const { data: weights } = await supabase
  .from('weights')
  .select('*')
  .eq('user_id', user.id);

// Transform array from snake_case to camelCase
const transformedWeights = transformArray(weights, 'weights', 'toCamel');
```

## 📝 **Adding New Tables/Fields**

### **Step 1: Update Supabase Schema**

```sql
-- Add new field to existing table
ALTER TABLE profiles ADD COLUMN new_field_name TEXT;

-- Or create new table
CREATE TABLE new_table (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  new_field_name TEXT NOT NULL
);
```

### **Step 2: Update Zod Schema**

```typescript
// In packages/schemas/src/your-schema.ts
export const YourSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  newFieldName: z.string(), // camelCase
  // ... other fields
});
```

### **Step 3: Update Transformation Functions**

```typescript
// In apps/web/lib/utils/transformers.ts
export function toSnakeCase(data: any, tableName: string) {
  switch (tableName) {
    case 'your_table':
      return {
        id: data.id,
        user_id: data.userId,
        new_field_name: data.newFieldName, // snake_case
        // ... other fields
      };
    // ... other cases
  }
}

export function toCamelCase(data: any, tableName: string) {
  switch (tableName) {
    case 'your_table':
      return {
        id: data.id,
        userId: data.user_id,
        newFieldName: data.new_field_name, // camelCase
        // ... other fields
      };
    // ... other cases
  }
}
```

### **Step 4: Update Database Types**

```bash
# Regenerate Supabase types
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > apps/web/lib/supabase/database.types.ts
```

## 🚨 **Common Pitfalls & How to Avoid Them**

### **❌ Don't Mix Conventions in One Layer**

```typescript
// ❌ WRONG - Mixed conventions
const badData = {
  userId: '123',           // camelCase
  birth_year: 1990,        // snake_case
  heightCm: 175,           // camelCase
  activity_level: 'high'   // snake_case
};

// ✅ CORRECT - Consistent camelCase
const goodData = {
  userId: '123',
  birthYear: 1990,
  heightCm: 175,
  activityLevel: 'high'
};
```

### **❌ Don't Skip Transformation**

```typescript
// ❌ WRONG - Direct insertion without transformation
const { error } = await supabase
  .from('profiles')
  .insert(formData); // This will fail!

// ✅ CORRECT - Transform first
const supabaseData = toSnakeCase(formData, 'profiles');
const { error } = await supabase
  .from('profiles')
  .insert(supabaseData);
```

### **❌ Don't Hardcode Field Names**

```typescript
// ❌ WRONG - Hardcoded field names
const profile = {
  userId: data.user_id,        // Hardcoded
  birthYear: data.birth_year,  // Hardcoded
  // ... more hardcoded fields
};

// ✅ CORRECT - Use transformation function
const profile = toCamelCase(data, 'profiles');
```

## 🔍 **Debugging Transformation Issues**

### **Enable Debug Logging**

```typescript
// Add this to your transformation functions for debugging
export function toSnakeCase(data: any, tableName: string) {
  console.log('Transforming to snake_case:', { data, tableName });
  
  const result = /* transformation logic */;
  
  console.log('Transformation result:', result);
  return result;
}
```

### **Common Error Messages**

| Error | Cause | Solution |
|-------|-------|----------|
| `column "user_id" does not exist` | Field not transformed to snake_case | Use `toSnakeCase()` before inserting |
| `Property 'userId' does not exist` | Field not transformed to camelCase | Use `toCamelCase()` after fetching |
| `Type 'string' is not assignable` | Zod schema expects camelCase | Transform data before validation |

### **Validation Checklist**

- [ ] Form data uses camelCase field names
- [ ] Data is transformed to snake_case before sending to Supabase
- [ ] Data is transformed to camelCase after fetching from Supabase
- [ ] Zod schemas use camelCase field names
- [ ] All new fields are added to transformation functions

## 📚 **Related Files**

- **Transformation Utilities**: `apps/web/lib/utils/transformers.ts`
- **Zod Schemas**: `packages/schemas/src/`
- **Supabase Schema**: `supabase/schema.sql`
- **Database Types**: `apps/web/lib/supabase/database.types.ts`
- **Example Usage**: `apps/web/app/onboarding/page.tsx`

## 🤝 **Contributing Guidelines**

When adding new features or modifying existing ones:

1. **Always use camelCase** in TypeScript/Zod schemas
2. **Always use snake_case** in Supabase/PostgreSQL
3. **Update transformation functions** for new tables/fields
4. **Test both directions** (to/from Supabase)
5. **Document any new conventions** in this file

## 📞 **Need Help?**

If you encounter naming convention issues:

1. Check this documentation first
2. Verify transformation functions are up to date
3. Ensure you're using the correct transformation direction
4. Check browser console for transformation logs
5. Verify field names match exactly (case-sensitive)

---

**Remember**: The key to success is **consistency**. Always transform data at the boundaries between different layers of your application.
