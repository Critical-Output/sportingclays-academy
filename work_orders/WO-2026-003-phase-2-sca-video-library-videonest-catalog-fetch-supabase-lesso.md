---
id: WO-2026-003
title: "[PHASE-2] SCA Video Library — VideoNest Catalog Fetch + Supabase Lessons Seeding"
goal: Seed the Supabase lessons table with VideoNest video_url values for all 259 SCA videos, unblocking the SCA video library and enabling DNS cutover to deliver a fully functional product.
context: []
acceptance_criteria:
  - Script fetches all video records from VideoNest channel 440
  - Each video_id matched to a Supabase lesson row via title/slug matching
  - lessons.video_url populated with VideoNest embed URL for all matched lessons
  - "Seeding report output: N matched, M unmatched (manual review list)"
  - Script committed to platform repo at scripts/seed-videonest-lessons.ts
non_goals: []
stop_conditions:
  - Do not modify any CTI, Karen Miles, or Gebben Miles data
  - Do not hard-delete any existing lesson rows
  - Stop and report if VideoNest API returns auth error
priority: 1
tags:
  - PHASE-2
  - sca
  - video
  - videonest
  - supabase
estimate_hours: 0.5
status: ready
created_at: 2026-02-28
updated_at: 2026-02-28
depends_on: []
era: null
---
## Notes
- 
