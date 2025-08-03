-- Create emails table
CREATE TABLE emails (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  
  -- Email type and flow
  email_type VARCHAR(50) NOT NULL CHECK (
    email_type IN (
      'FORM_FOLLOWUP_1',
      'FORM_FOLLOWUP_2',
      'CALL_CONFIRMATION',
      'CALL_REMINDER_24H',
      'CALL_REMINDER_2H',
      'NO_SHOW_FOLLOWUP',
      'NURTURE_1',
      'NURTURE_2',
      'NURTURE_3',
      'NURTURE_MONTHLY_1',
      'NURTURE_MONTHLY_2',
      'REFERRAL_FEEDBACK',
      'REFERRAL_PROGRAM'
    )
  ),
  flow VARCHAR(30) NOT NULL CHECK (
    flow IN ('NONE', 'FORM_NO_CALL', 'CALL_REMINDERS', 'NO_SHOW', 'NURTURE', 'REFERRAL')
  ),
  sequence_number INTEGER NOT NULL,
  
  -- Email status and scheduling
  status VARCHAR(20) NOT NULL DEFAULT 'PENDING' CHECK (
    status IN ('PENDING', 'SENT', 'FAILED')
  ),
  scheduled_for TIMESTAMP WITH TIME ZONE NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_emails_lead_id ON emails(lead_id);
CREATE INDEX idx_emails_status ON emails(status);
CREATE INDEX idx_emails_scheduled_for ON emails(scheduled_for);
CREATE INDEX idx_emails_flow ON emails(flow);
CREATE INDEX idx_emails_email_type ON emails(email_type);

-- Create updated_at trigger
CREATE TRIGGER update_emails_updated_at 
  BEFORE UPDATE ON emails 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- Create policies for emails table (no authentication required)
CREATE POLICY "Allow all operations for emails" ON emails
  FOR ALL USING (true); 