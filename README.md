# NLF Vietnam

Nuxt 4 + Vue + TypeScript, bilingual VI/EN landing page and server-side Neon registration API. This `nlf-vietnam` branch replaces the Next.js runtime; the original app is untouched on `workshop-landing`.

## Run locally

```sh
npm ci
cp .env.example .env
# Fill in the DEVELOPMENT branch connection strings and a random rate-limit secret.
npm run db:migrate
npm run dev
```

Open `/vi` or `/en`. Root redirects to `/vi`. Browser language switching preserves in-memory form details; nothing personal is stored in localStorage.

## Verify

```sh
npm test
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
# Only against the development database; writes a clearly labelled synthetic lead:
NLF_TEST_DATABASE=development node --env-file=.env --import tsx scripts/test-database.ts
```

## Edit content

- Copy: `app/content/vi.json` and `en.json` (matching named keys).
- Media and Zalo link: `app/content/media.ts`, files in `public/media/`.
- Palette/layout: `app/assets/css/main.css`.
- Sections/order: `app/components/sections/`, `app/pages/[locale]/index.vue`.
- Programmes: `shared/catalogue.ts`; database changes require a new SQL migration.
- Dates/fees: `workshop_events` in Neon. No real events are seeded. Registration status derives from server-validated event state.

## Backend

`POST /api/registrations` validates input, rate limits, checks origin and CAPTCHA, and writes an enquiry plus outbox event atomically. It returns a reference only. There is no public endpoint exposing leads and no admin UI yet. See `docs/architecture.md` for integration, privacy and schema decisions.

Neon project: `icy-sun-02259763` (Singapore). Development branch: `br-plain-hat-b3c1qf52` / `nlf-vietnam`. Production branch remains unchanged. Existing Neon Auth is preserved; the public form does not require login. No extra storage bucket or sample Function was deployed.

## Before publishing

Use a Nuxt server-capable host, not static export. Set `NUXT_DATABASE_URL`, `NUXT_RATE_LIMIT_SECRET`, `NUXT_ALLOWED_ORIGIN`, `NUXT_PUBLIC_SITE_URL`, `NUXT_TURNSTILE_SECRET`, and `NUXT_PUBLIC_TURNSTILE_SITE_KEY` in host secrets. Production submissions deliberately return 503 without Turnstile configuration. Turnstile action is `registration`; hostname must match allowed origin. Local `nuxt dev` can test without CAPTCHA. Set `NUXT_PUBLIC_PREVIEW=false` only when ready for indexing.

Run migrations on production only after approval. Review privacy contact/retention/deletion procedures, replace illustration/testimonial placeholders with approved evidence, confirm trainer credentials and event policies, and decide staff access to leads. The checked-in outbox has no dispatcher; no notifications are sent. This branch is not a deployed site.
