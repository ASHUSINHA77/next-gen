create extension if not exists "pgcrypto";

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.courses enable row level security;

drop policy if exists "Allow public read access to courses" on public.courses;

create policy "Allow public read access to courses"
on public.courses
for select
to anon
using (true);

insert into public.courses (id, title, progress, icon_name)
values
  ('11111111-1111-4111-8111-111111111111', 'Advanced React Patterns', 75, 'Atom'),
  ('22222222-2222-4222-8222-222222222222', 'TypeScript Systems', 62, 'Braces'),
  ('33333333-3333-4333-8333-333333333333', 'Data Visualization Lab', 48, 'LineChart'),
  ('44444444-4444-4444-8444-444444444444', 'AI Product Thinking', 86, 'BrainCircuit')
on conflict (id) do update
set
  title = excluded.title,
  progress = excluded.progress,
  icon_name = excluded.icon_name;
