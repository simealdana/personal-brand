-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Basic form information
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  phone_number VARCHAR(20),
  has_idea_clear BOOLEAN NOT NULL DEFAULT false,
  budget VARCHAR(20) NOT NULL CHECK (budget IN ('$500-$1000', '$1000-$2000', '$2000-$5000')),
  
  -- Lead status in funnel
  status VARCHAR(50) NOT NULL DEFAULT 'FORM_SUBMITTED' CHECK (
    status IN (
      'FORM_SUBMITTED',
      'CALL_SCHEDULED', 
      'CALL_ATTENDED',
      'CALL_SCHEDULED_NO_SHOW',
      'CALL_ATTENDED_NO_PURCHASE',
      'PURCHASED',
      'COURSE_COMPLETED'
    )
  ),
  
  -- Email flow status
  email_flow_status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE' CHECK (
    email_flow_status IN ('ACTIVE', 'PAUSED', 'COMPLETED', 'UNSUBSCRIBED')
  ),
  current_email_flow VARCHAR(30) NOT NULL DEFAULT 'NONE' CHECK (
    current_email_flow IN ('NONE', 'FORM_NO_CALL', 'CALL_REMINDERS', 'NO_SHOW', 'NURTURE', 'REFERRAL')
  ),
  current_email_sequence INTEGER NOT NULL DEFAULT 0,
  
  -- Event dates for flows
  form_submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  call_booked_at TIMESTAMP WITH TIME ZONE,
  call_scheduled_for TIMESTAMP WITH TIME ZONE,
  call_attended_at TIMESTAMP WITH TIME ZONE,
  call_no_show_at TIMESTAMP WITH TIME ZONE,
  mentorship_started_at TIMESTAMP WITH TIME ZONE,
  mentorship_ended_at TIMESTAMP WITH TIME ZONE,
  last_email_sent_at TIMESTAMP WITH TIME ZONE,
  
  -- Unsubscribe tracking
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_email_flow_status ON leads(email_flow_status);
CREATE INDEX idx_leads_current_email_flow ON leads(current_email_flow);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_form_submitted_at ON leads(form_submitted_at);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at 
  BEFORE UPDATE ON leads 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policies for application access (no authentication required)
CREATE POLICY "Allow all operations for application" ON leads
  FOR ALL USING (true);

-- Alternative: More restrictive policies if needed
-- CREATE POLICY "Allow select for application" ON leads
--   FOR SELECT USING (true);
-- 
-- CREATE POLICY "Allow insert for application" ON leads
--   FOR INSERT WITH CHECK (true);
-- 
-- CREATE POLICY "Allow update for application" ON leads
--   FOR UPDATE USING (true); 