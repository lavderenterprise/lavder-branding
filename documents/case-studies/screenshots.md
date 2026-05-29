# Producing clean product screenshots

Case-study screenshots must show the **real product** with **realistic data** — never the app's default/test fixtures, never lorem-ipsum. The workflow: stand up the client's app locally, seed believable demo data, capture every page in light **and** dark theme at 2×, then drop the PNGs into the deck's browser frames.

This is the most laborious part of a case study. Budget for it.

## 1. Stand up the app

Most Lavder client apps are React + Node/Express + PostgreSQL (Drizzle). Locally:

1. **Database** — a throwaway Postgres. Pick a host port that's free (the Mac and other Docker stacks often occupy 5432/5433):
   ```bash
   docker run -d --name pg-<client> \
     -e POSTGRES_PASSWORD=dev -e POSTGRES_USER=<user> -e POSTGRES_DB=<db> \
     -p 127.0.0.1:15432:5432 postgres:16-alpine
   # if TCP auth fails from the host, set the password explicitly:
   docker exec pg-<client> psql -U <user> -d <db> -c "ALTER USER <user> WITH PASSWORD 'dev';"
   ```
2. **Schema** — Drizzle push is interactive; force it non-interactively:
   ```bash
   DATABASE_URL="postgresql://<user>:dev@127.0.0.1:15432/<db>" npx drizzle-kit push --force
   ```
3. **Run the dev server** — port 5000 is taken by macOS Control Center (AirPlay); use another:
   ```bash
   DATABASE_URL="postgresql://<user>:dev@127.0.0.1:15432/<db>" PORT=5050 \
     SESSION_SECRET=dev NODE_ENV=development npx tsx server/index.ts
   ```
   - Gotcha: `server.listen({ reusePort:true, host:"0.0.0.0" })` throws `ENOTSUP` on macOS. Temporarily switch to `host:"127.0.0.1"` without `reusePort`. **Revert the file afterwards.**

## 2. Seed realistic demo data

No client app ships a demo seeder. Write a one-off `seed-demo.ts` that drives the app's own storage layer (so business invariants hold), run it with `tsx`. Read the schema + storage methods first; match decimal-as-string, enum values verbatim, document-number generation, and password hashing exactly.

What "realistic" means:
- **Names**: real-sounding Italian customers (`Studio Ferri & Associati S.r.l.`, `Famiglia Bianchi`, `Ristorante La Loggia S.r.l.`), a mix of privato/azienda. Never "Test User".
- **Products / line items**: domain-true (for furniture: `Cucina componibile`, `Divano 3 posti`, `Armadio`), whole-number quantities, plausible prices, correct VAT rates.
- **Documents**: spread dates, varied valid statuses, the client's real numbering format (`FAB/PRE/2026/00001`).
- **Volumes**: enough rows that list pages look populated, not empty.
- **An admin user** you can log in as (the deck captures the authenticated UI).

Run:
```bash
DATABASE_URL="postgresql://<user>:dev@127.0.0.1:15432/<db>" NODE_ENV=development npx tsx seed-demo.ts
```

## 3. Capture light + dark

Use [`capture-screenshots.mjs`](./capture-screenshots.mjs). It logs in via `POST /api/auth/login` (session cookie), forces the theme, navigates each route, and screenshots at deviceScaleFactor 2.

```bash
# from inside the client project (so `puppeteer` resolves)
THEME=light BASE=http://localhost:5050 LOGIN_USER=admin@<client>.it LOGIN_PASS=... \
  OUT=$(pwd)/shots-clean node /path/to/capture-screenshots.mjs
THEME=dark  BASE=http://localhost:5050 LOGIN_USER=admin@<client>.it LOGIN_PASS=... \
  OUT=$(pwd)/shots-clean node /path/to/capture-screenshots.mjs   # writes *-dark.png
```

Theme forcing: the script sets `localStorage.theme` before load, emulates `prefers-color-scheme`, and toggles the `.dark` class. Adjust to the app's actual theme mechanism.

For a focused crop (e.g. a detail section), scroll the element into view before the shot, or capture the page non-`fullPage` so only the viewport top is taken.

## 4. Use them in the deck

- Wrap each PNG in a `.bw` browser frame with the real URL. **No drop-shadow.**
- Light screenshots → white slides; dark screenshots → dark slides. Show one screen in both themes to demonstrate theme support.
- Keep the app's own logo in the sidebar (it's the real product); the deck adds the client co-brand in the header separately.
- The screenshots show seeded demo data, so no real client PII is exposed — a feature, not a bug. Still get the client's OK before sharing.

## 5. Tear down

```bash
git checkout server/index.ts          # revert the reusePort/host edit
docker rm -f pg-<client>              # drop the throwaway DB
# stop the dev server (kill the tsx process)
```
Keep `seed-demo.ts` and the `shots-clean/` PNGs with the project if you'll iterate on the deck.
