-- Create tables for each report type

-- 1. Teacher Reports
CREATE TABLE teacher_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  teacher_name TEXT NOT NULL,
  employee_id TEXT,
  class_grade TEXT NOT NULL,
  section TEXT,
  academic_session TEXT,
  week_start_date DATE NOT NULL,
  week_end_date DATE NOT NULL,
  total_enrolled INTEGER,
  avg_attendance NUMERIC,
  low_attendance_students INTEGER,
  attendance_trend TEXT,
  attendance_issues TEXT,
  subjects_covered TEXT,
  planned_syllabus TEXT,
  actual_syllabus TEXT,
  completion_status TEXT,
  delay_reason TEXT,
  exam_impact TEXT,
  test_conducted TEXT,
  test_type TEXT,
  subject_name TEXT,
  test_date DATE,
  test_syllabus TEXT,
  avg_score NUMERIC,
  below_passing INTEGER,
  performance_level TEXT,
  action_planned TEXT,
  discipline_issues TEXT,
  issue_type TEXT,
  students_involved TEXT,
  issue_description TEXT,
  action_taken TEXT,
  escalated TEXT,
  complaints TEXT,
  complaint_source TEXT,
  complaint_category TEXT,
  submission_status TEXT DEFAULT 'pending',
  director_notes TEXT,
  -- Added for dashboard fidelity
  syllabus_status NUMERIC DEFAULT 0,
  classroom_observation TEXT,
  pending_topics TEXT,
  resource_needs TEXT
);

-- 2. Incident Reports
CREATE TABLE incident_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reporter_name TEXT NOT NULL,
  reporter_role TEXT NOT NULL,
  incident_date DATE NOT NULL,
  incident_time TIME NOT NULL,
  location TEXT NOT NULL,
  severity TEXT NOT NULL,
  incident_type TEXT NOT NULL,
  involved_parties TEXT,
  description TEXT NOT NULL,
  immediate_action TEXT,
  witnesses TEXT,
  is_emergency BOOLEAN DEFAULT FALSE,
  follow_up_required BOOLEAN DEFAULT FALSE,
  submission_status TEXT DEFAULT 'pending',
  director_notes TEXT
);

-- 3. Transport Reports
CREATE TABLE transport_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  route_manager TEXT NOT NULL,
  route_id TEXT NOT NULL,
  vehicle_number TEXT NOT NULL,
  driver_name TEXT,
  arrival_time_morning TIME,
  departure_time_evening TIME,
  fuel_consumed NUMERIC,
  cleaning_status TEXT,
  maintenance_issues TEXT,
  student_count INTEGER,
  incidents_on_route TEXT,
  submission_status TEXT DEFAULT 'pending',
  director_notes TEXT,
  -- Added for dashboard fidelity
  distance_covered NUMERIC DEFAULT 0,
  vehicle_status TEXT DEFAULT 'Optimal',
  is_cleaning_done BOOLEAN DEFAULT TRUE,
  is_water_service_done BOOLEAN DEFAULT TRUE,
  cleaning_staff_count INTEGER DEFAULT 0,
  cleaning_remarks TEXT,
  logistics_notes TEXT
);

-- 4. Principal Reports
CREATE TABLE principal_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  principal_name TEXT NOT NULL,
  week_start_date DATE,
  week_end_date DATE,
  executive_summary TEXT,
  syllabus_completion NUMERIC,
  tests_conducted INTEGER,
  academic_highlights TEXT,
  teacher_attendance NUMERIC,
  staff_morale TEXT,
  discipline_cases INTEGER,
  safety_status TEXT,
  fee_collection NUMERIC,
  strategic_brief TEXT,
  director_action_items TEXT,
  submission_status TEXT DEFAULT 'pending',
  director_notes TEXT
);

-- 5. Admin Reports
CREATE TABLE admin_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  admin_name TEXT NOT NULL,
  designation TEXT,
  employee_id TEXT,
  department TEXT NOT NULL,
  week_start_date DATE,
  week_end_date DATE,
  tasks_completed INTEGER,
  pending_tasks INTEGER,
  weekly_summary TEXT,
  major_accomplishments TEXT,
  challenges_faced TEXT,
  fee_collections NUMERIC,
  office_supplies_status TEXT,
  system_availability TEXT,
  notes TEXT,
  submission_status TEXT DEFAULT 'pending',
  director_notes TEXT
);

-- Enable RLS
ALTER TABLE teacher_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE incident_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE transport_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE principal_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_reports ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public can submit" ON teacher_reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can submit" ON incident_reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can submit" ON transport_reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can submit" ON principal_reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can submit" ON admin_reports FOR INSERT WITH CHECK (true);

-- Authenticated (Director) can view all
CREATE POLICY "Director can view all" ON teacher_reports FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Director can view all" ON incident_reports FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Director can view all" ON transport_reports FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Director can view all" ON principal_reports FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Director can view all" ON admin_reports FOR SELECT USING (auth.role() = 'authenticated');

-- Director can update status
CREATE POLICY "Director can update status" ON teacher_reports FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Director can update status" ON incident_reports FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Director can update status" ON transport_reports FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Director can update status" ON principal_reports FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Director can update status" ON admin_reports FOR UPDATE USING (auth.role() = 'authenticated');
