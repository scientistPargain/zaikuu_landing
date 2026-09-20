-- Create deletion_requests table for Google Play compliance
-- This table stores account and data deletion requests with a 30-day grace period.

create table deletion_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  type text not null check (type in ('account', 'data')),
  status text not null default 'pending' check (status in ('pending', 'completed', 'cancelled')),
  requested_at timestamptz not null default now(),
  scheduled_for timestamptz not null,
  completed_at timestamptz
);

-- Enable Row Level Security
alter table deletion_requests enable row level security;

-- Users can read their own requests
create policy "Users can view own deletion requests"
  on deletion_requests for select
  using (auth.uid() = user_id);

-- Users can create their own requests
create policy "Users can create own deletion requests"
  on deletion_requests for insert
  with check (auth.uid() = user_id);

-- Users can cancel their own pending requests
create policy "Users can cancel own pending requests"
  on deletion_requests for update
  using (auth.uid() = user_id and status = 'pending')
  with check (status = 'cancelled');
