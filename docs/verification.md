# Verification — 2026-10-09

- `npm test`: 5 tests passed (phone normalization, validation, consent, idempotency hash, bilingual copy parity).
- `npm run typecheck`: passed, after aligning Vue Router with Nuxt 4.6's dependency.
- `npm run build`: passed; server-capable Node output created.
- Built server rendering: `/en`, `/vi`, `/en/privacy`, `/api/workshops` returned 200 via Nitro localFetch. English headline matched approved copy; empty event list is intentional.
- Migration `001_initial.sql`: applied only to development branch `br-plain-hat-b3c1qf52`.
- Live service tests reached: persisted synthetic lead, duplicate retry returned same reference, payload conflict rejected, invalid event rejected, one outbox row per registration verified. The standalone test run later hit a transport timeout during repeated rate-limit calls; it did not complete end-to-end.
- Rate-limit SQL verified separately through Neon transaction: returned count 1, count 2, then no row at cap 2.
- Two clearly marked synthetic registrations were retained on the development branch; no customer data was used or notifications sent.
- Browser tests are checked in but NOT verified here: standard browser download was truncated, fallback browser extraction failed, and Nuxt dev preview encountered restricted Unix socket permissions. No visual QA claim is made.
- Production DB and original Git branch were not modified. No deployment or real notification integration was performed.

Before public launch, run browser tests and actual form submission on a preview host using development DB + Turnstile keys; then approve real content, policies and staff access before provisioning production migrations.
