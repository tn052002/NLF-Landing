# NLF Vietnam architecture

## Source and scope
Nuxt conversion of the approved `nlf-landing-vi-en.html`: midnight/cyan/silver palette, supplied logo, approved VI/EN copy. The Next.js application remains on `workshop-landing`; this branch runs Nuxt at the repository root. No merge or deployment is implied.

## Boundaries
- `app/pages/[locale]/index.vue`: section composition, metadata, catalogue loading.
- `app/components/sections`: Hero, Practice, Goals, Stories, Workshops, Values, FAQ.
- `app/components/RegistrationSection.vue`: form UX and short-lived in-memory draft. No PII in browser persistence.
- `app/content/{vi,en}.json`: matching named translation keys. No numeric indexes.
- `app/content/media.ts`: asset paths, alt text, illustration flags, Zalo advice link. Change images here; don't alter component markup.
- `app/assets/css/main.css`: shared design tokens and responsive styling.
- `shared/catalogue.ts`: stable programme IDs and public event shape.
- `shared/registration.ts`: shared input contract, validation and consent version.
- `server/api`: HTTP boundary; origin/body limits, validation, bot verification and error mapping.
- `server/services/registrations.ts`: rate limits, idempotency and atomic registration/outbox persistence.
- `db/migrations`: versioned SQL; no ORM or ad hoc production schema changes.

Static brand copy stays in version control. Real workshop events come from Neon, not hardcoded HTML. Future CMS integration should return the same typed content/media shapes. v-html is used only for trusted, checked-in copy with strong/br markup, never visitor input or unchecked CMS content.

## Registration semantics
No event = interest. Advice has no programme/event FK. Open event = event_enquiry; full event = waitlist. Neither confirms a seat or payment. Structured prerequisites are reviewed manually by NLF; the landing page does not certify prior completion. The API rechecks event status, date and programme in the insert statement.

No real events are seeded: dates and fees must be supplied. The API exposes only public event fields. No public endpoint lists submissions.

## Integration boundary
Successful writes create exactly one `registration.created` outbox row in the same database statement. It contains only the registration ID. There is no notification dispatcher in this release. Add an authenticated worker and an adapter for email/CRM/webhooks later, with retries and delivery tracking. Never make registration success depend on notification delivery; never forward PII without approved purpose/consent.

## Privacy and security
Neon secrets live only in server environment variables. Requests are same-origin JSON, capped at 16 KiB, schema validated, honeypot checked. Rate limits use HMAC identifiers for phone and trusted client IP, persisted across server instances. Retry keys are bound to canonical payloads; changing a payload requires a new key. SQL is parameterised. Raw payloads, IPs and driver errors are not logged. Database responses expose only a reference and generic status.

Production builds fail closed for form submission if Turnstile credentials are absent. Configure action `registration` and matching hostname. Development bypass is restricted to Nuxt dev mode. Proxy header trust is off by default; enable only on a host that strips caller-supplied forwarding headers. Server builds are required, not static-only export.

Before launch: approve privacy text, data owner/contact, retention and deletion process; implement a scheduled cleanup of expired rate-limit windows; set production credentials and bot keys; supply real media, confirmed events, trainer credentials and policies. Decide how staff will securely access submissions; no admin UI is included yet.

## Neon environment
Project: `icy-sun-02259763` / nlf-vietnam / Singapore.
Development: `br-plain-hat-b3c1qf52` / nlf-vietnam.
Production: `br-long-resonance-b34tpr6u` / production — left unchanged.
Existing Neon Auth is preserved, not consumed by this public enquiry form. Buckets and sample Neon Functions are not needed: Nuxt's server owns the endpoint. No infrastructure deploy is run.

Use pooled `NUXT_DATABASE_URL` at runtime and direct `DATABASE_URL_UNPOOLED` for migrations. Copy .env.example locally; never commit credentials. The migration runner records checksums and rejects modified applied migrations. Run migrations serially, not concurrently.
