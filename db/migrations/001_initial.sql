CREATE TABLE programmes (
  id text PRIMARY KEY, name text NOT NULL, duration_days integer NOT NULL CHECK (duration_days > 0),
  prerequisite_id text REFERENCES programmes(id), active boolean NOT NULL DEFAULT true
);
INSERT INTO programmes (id,name,duration_days) VALUES ('community','Community Day',1),('compact','Compact Workshop',2),('fundamental','Fundamental Movement',7);
INSERT INTO programmes (id,name,duration_days,prerequisite_id) VALUES ('structured','Structured Movement',7,'fundamental');
CREATE TABLE workshop_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), programme_id text NOT NULL REFERENCES programmes(id),
  starts_at timestamptz NOT NULL, ends_at timestamptz NOT NULL, location text NOT NULL,
  fee_vnd integer CHECK(fee_vnd >= 0), status text NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','open','full','closed')),
  created_at timestamptz NOT NULL DEFAULT now(), CHECK(ends_at >= starts_at), UNIQUE(id,programme_id)
);
CREATE INDEX workshop_events_public ON workshop_events(status,starts_at);
CREATE TABLE registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), idempotency_key uuid UNIQUE NOT NULL, payload_hash text NOT NULL,
  name text NOT NULL CHECK(length(name) BETWEEN 2 AND 100), phone text NOT NULL CHECK(length(phone) BETWEEN 8 AND 16),
  programme_id text REFERENCES programmes(id), event_id uuid, locale text NOT NULL CHECK(locale IN ('vi','en')),
  message text NOT NULL DEFAULT '' CHECK(length(message) <= 2000),
  kind text NOT NULL CHECK(kind IN ('interest','event_enquiry','waitlist','advice')),
  status text NOT NULL DEFAULT 'new' CHECK(status IN ('new','contacted','confirmed','cancelled')),
  consent_version text NOT NULL, consented_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY(event_id,programme_id) REFERENCES workshop_events(id,programme_id),
  CHECK(event_id IS NULL OR programme_id IS NOT NULL)
);
CREATE INDEX registrations_followup ON registrations(status,created_at);
CREATE INDEX registrations_event ON registrations(event_id);
CREATE TABLE rate_limits (
  key_hash text NOT NULL, window_start timestamptz NOT NULL, count integer NOT NULL DEFAULT 1,
  PRIMARY KEY(key_hash,window_start)
);
CREATE TABLE integration_outbox (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), registration_id uuid UNIQUE NOT NULL REFERENCES registrations(id),
  topic text NOT NULL DEFAULT 'registration.created', created_at timestamptz NOT NULL DEFAULT now(), delivered_at timestamptz
);
-- No public database/Data API access: only the server connection may read PII.
REVOKE ALL ON registrations, rate_limits, integration_outbox FROM PUBLIC;
