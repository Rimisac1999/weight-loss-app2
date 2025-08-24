-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE sex_type AS ENUM ('male', 'female');
CREATE TYPE activity_level AS ENUM ('sedentary', 'light', 'moderate', 'high', 'athlete');
CREATE TYPE units_type AS ENUM ('metric', 'imperial');
CREATE TYPE meal_source AS ENUM ('manual', 'photo');
CREATE TYPE alcohol_type AS ENUM ('beer_pint', 'wine_bottle', 'custom');
CREATE TYPE ai_mode AS ENUM ('hosted', 'byok');

-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  sex sex_type NOT NULL,
  birth_year INTEGER NOT NULL CHECK (birth_year >= 1900 AND birth_year <= EXTRACT(YEAR FROM CURRENT_DATE)),
  height_cm INTEGER NOT NULL CHECK (height_cm >= 100 AND height_cm <= 250),
  activity_level activity_level NOT NULL DEFAULT 'moderate',
  stride_cm INTEGER CHECK (stride_cm >= 50 AND stride_cm <= 150),
  preferred_units units_type NOT NULL DEFAULT 'metric',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Weights table
CREATE TABLE weights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  weight_kg NUMERIC(5,2) NOT NULL CHECK (weight_kg > 0 AND weight_kg <= 500),
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(user_id, date)
);

-- Meals table
CREATE TABLE meals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  logged_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT TIMEZONE('utc', NOW()),
  source meal_source NOT NULL,
  total_kcal NUMERIC(6,1) NOT NULL CHECK (total_kcal >= 0),
  protein_g NUMERIC(6,1) NOT NULL CHECK (protein_g >= 0),
  carbs_g NUMERIC(6,1) NOT NULL CHECK (carbs_g >= 0),
  fat_g NUMERIC(6,1) NOT NULL CHECK (fat_g >= 0),
  ai_confidence_pct NUMERIC(5,2) CHECK (ai_confidence_pct >= 0 AND ai_confidence_pct <= 100),
  photo_url TEXT,
  raw_ai JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Meal items table
CREATE TABLE meal_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meal_id UUID NOT NULL REFERENCES meals(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  grams NUMERIC(7,1),
  kcal NUMERIC(6,1) NOT NULL CHECK (kcal >= 0),
  protein_g NUMERIC(6,1) NOT NULL CHECK (protein_g >= 0),
  carbs_g NUMERIC(6,1) NOT NULL CHECK (carbs_g >= 0),
  fat_g NUMERIC(6,1) NOT NULL CHECK (fat_g >= 0),
  confidence_pct NUMERIC(5,2) CHECK (confidence_pct >= 0 AND confidence_pct <= 100)
);

-- Alcohol logs table
CREATE TABLE alcohol_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  type alcohol_type NOT NULL,
  volume_ml INTEGER NOT NULL CHECK (volume_ml > 0),
  abv_pct NUMERIC(4,1) NOT NULL CHECK (abv_pct > 0 AND abv_pct <= 100),
  kcal_est NUMERIC(6,1) NOT NULL CHECK (kcal_est >= 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Activities table
CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  z2_minutes INTEGER DEFAULT 0 CHECK (z2_minutes >= 0),
  resistance_minutes INTEGER DEFAULT 0 CHECK (resistance_minutes >= 0),
  steps INTEGER DEFAULT 0 CHECK (steps >= 0),
  floors INTEGER DEFAULT 0 CHECK (floors >= 0),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(user_id, date)
);

-- Scenarios table
CREATE TABLE scenarios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  delta_kcal_per_day INTEGER NOT NULL,
  z2_min_per_day INTEGER NOT NULL DEFAULT 0 CHECK (z2_min_per_day >= 0),
  resistance_min_per_day INTEGER NOT NULL DEFAULT 0 CHECK (resistance_min_per_day >= 0),
  steps_per_day INTEGER NOT NULL DEFAULT 0 CHECK (steps_per_day >= 0),
  floors_per_day INTEGER NOT NULL DEFAULT 0 CHECK (floors_per_day >= 0),
  start_date DATE NOT NULL,
  horizon_weeks INTEGER NOT NULL CHECK (horizon_weeks > 0 AND horizon_weeks <= 52),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Settings table
CREATE TABLE settings (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  ai_mode ai_mode NOT NULL DEFAULT 'hosted',
  byok_hint_set BOOLEAN DEFAULT FALSE,
  locale TEXT DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes
CREATE INDEX idx_weights_user_date ON weights(user_id, date DESC);
CREATE INDEX idx_meals_user_logged ON meals(user_id, logged_at DESC);
CREATE INDEX idx_alcohol_user_date ON alcohol_logs(user_id, date DESC);
CREATE INDEX idx_activities_user_date ON activities(user_id, date DESC);

-- Row Level Security policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE weights ENABLE ROW LEVEL SECURITY;
ALTER TABLE meals ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE alcohol_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Weights policies
CREATE POLICY "Users can view own weights" ON weights
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own weights" ON weights
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own weights" ON weights
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own weights" ON weights
  FOR DELETE USING (auth.uid() = user_id);

-- Meals policies
CREATE POLICY "Users can view own meals" ON meals
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own meals" ON meals
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own meals" ON meals
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own meals" ON meals
  FOR DELETE USING (auth.uid() = user_id);

-- Meal items policies (via meal ownership)
CREATE POLICY "Users can view own meal items" ON meal_items
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM meals WHERE meals.id = meal_items.meal_id AND meals.user_id = auth.uid()
  ));
CREATE POLICY "Users can insert own meal items" ON meal_items
  FOR INSERT WITH CHECK (EXISTS (
    SELECT 1 FROM meals WHERE meals.id = meal_items.meal_id AND meals.user_id = auth.uid()
  ));
CREATE POLICY "Users can update own meal items" ON meal_items
  FOR UPDATE USING (EXISTS (
    SELECT 1 FROM meals WHERE meals.id = meal_items.meal_id AND meals.user_id = auth.uid()
  ));
CREATE POLICY "Users can delete own meal items" ON meal_items
  FOR DELETE USING (EXISTS (
    SELECT 1 FROM meals WHERE meals.id = meal_items.meal_id AND meals.user_id = auth.uid()
  ));

-- Alcohol logs policies
CREATE POLICY "Users can view own alcohol logs" ON alcohol_logs
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own alcohol logs" ON alcohol_logs
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own alcohol logs" ON alcohol_logs
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own alcohol logs" ON alcohol_logs
  FOR DELETE USING (auth.uid() = user_id);

-- Activities policies
CREATE POLICY "Users can view own activities" ON activities
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own activities" ON activities
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own activities" ON activities
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own activities" ON activities
  FOR DELETE USING (auth.uid() = user_id);

-- Scenarios policies
CREATE POLICY "Users can view own scenarios" ON scenarios
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own scenarios" ON scenarios
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own scenarios" ON scenarios
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own scenarios" ON scenarios
  FOR DELETE USING (auth.uid() = user_id);

-- Settings policies
CREATE POLICY "Users can view own settings" ON settings
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own settings" ON settings
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own settings" ON settings
  FOR UPDATE USING (auth.uid() = user_id);

-- Functions
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON settings
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();