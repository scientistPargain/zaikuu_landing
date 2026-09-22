-- Create feedback table for bug reports, ideas, and general feedback
-- Supports authenticated users and anonymous (user_id is null) submissions.

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  category text not null default 'general'
    check (category in ('bug', 'idea', 'general', 'other')),
  message text not null check (char_length(message) between 1 and 5000),
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.feedback enable row level security;

-- Authenticated users can insert feedback as themselves
create policy "Users can insert feedback"
  on public.feedback for insert
  to authenticated
  with check (auth.uid() = user_id);

-- Anonymous feedback allowed (user_id is null)
create policy "Anonymous feedback allowed"
  on public.feedback for insert
  to anon
  with check (user_id is null);

-- Users can read their own feedback
create policy "Users can read own feedback"
  on public.feedback for select
  to authenticated
  using (auth.uid() = user_id);

-- Per-user feedback lists
create index if not exists idx_feedback_user_id
  on public.feedback using btree (user_id);

-- Chronological feeds / admin review
create index if not exists idx_feedback_created_at
  on public.feedback using btree (created_at desc);
