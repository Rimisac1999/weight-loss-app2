# Supabase Setup Verification

Please run these checks in your Supabase SQL Editor to verify the database is set up correctly:

## 1. Check if tables exist

```sql
-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_type = 'BASE TABLE'
ORDER BY table_name;
```

Expected tables:
- profiles
- weights
- meals
- meal_items
- alcohol_logs
- activities
- scenarios
- settings

## 2. Check if types exist

```sql
-- Check custom types
SELECT typname 
FROM pg_type 
WHERE typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
AND typtype = 'e';
```

Expected types:
- sex_type
- activity_level
- units_type
- meal_source
- alcohol_type
- ai_mode

## 3. Check profiles table structure

```sql
-- Check profiles table columns
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'profiles'
ORDER BY ordinal_position;
```

## 4. Check Row Level Security

```sql
-- Check if RLS is enabled on profiles
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'profiles';
```

## 5. If tables don't exist, re-run the schema

If the tables don't exist, go back to the SQL Editor and run the entire contents of `supabase/schema.sql` again.

## 6. Test insert (after tables exist)

```sql
-- Test if you can insert a profile (replace with your actual user_id)
INSERT INTO profiles (user_id, sex, birth_year, height_cm, activity_level, stride_cm, preferred_units)
VALUES (
  auth.uid(), -- This gets your current user ID
  'male',
  1990,
  175,
  'moderate',
  75,
  'metric'
);
```

If this test insert works, delete it:
```sql
DELETE FROM profiles WHERE user_id = auth.uid();
```