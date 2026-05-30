# Producing clean product screenshots

Case-study screenshots must show the **real product** with **realistic data** — never the app's default/test fixtures, never lorem-ipsum. The workflow: stand up the client's app locally, seed believable demo data, capture every page at 2× (light always; **dark only if the app actually ships a dark theme** — never fake one), then drop the PNGs into the deck's browser frames.

This is the most laborious part of a case study. Budget for it.

## 1. Stand up the app

The stack varies per client — Fabbri is React + Node/Express + PostgreSQL (Drizzle); SicurCert is Laravel + Livewire + MariaDB. Adapt the database, run, login, and theme steps to the actual stack. For a JS/Postgres app, locally:

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

**For a Laravel / PHP app** (e.g. SicurCert): run a MariaDB container, point `.env` at it, migrate+seed, then `php artisan serve`:
```bash
docker run -d --name mariadb-<client> -e MARIADB_ROOT_PASSWORD=root \
  -e MARIADB_DATABASE=<db> -e MARIADB_USER=<user> -e MARIADB_PASSWORD=<user> \
  -p 127.0.0.1:13306:3306 mariadb:10.11
# .env: DB_PORT=13306, DB_DATABASE/USERNAME/PASSWORD to match, APP_FAKER_LOCALE=it_IT
php artisan migrate --seed && php artisan serve --port=8088
```
   - Gotcha: a package may cap the PHP version (SicurCert's `phpspreadsheet` requires `php <8.5`). Install the supported branch (`brew install php@8.4`) and run artisan with that exact binary (`/opt/homebrew/opt/php@8.4/bin/php artisan …`).

## 2. Seed realistic demo data

**Check first: many apps already ship a seeder or factories** — Laravel apps especially (SicurCert's `DatabaseSeeder` builds admin + manager + technicians + customers, all `password`). If one exists, use it: set the faker locale to Italian (`APP_FAKER_LOCALE=it_IT` in `.env`), run `php artisan migrate --seed`, then fix any stray placeholder names with a quick DB `UPDATE` (e.g. "Cliente Test" → "Marco Ferrari"). Only when **no** seeder exists, write a one-off `seed-demo.ts` that drives the app's own storage layer (so business invariants hold), run it with `tsx`. Read the schema + storage methods first; match decimal-as-string, enum values verbatim, document-number generation, and password hashing exactly.

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

Use [`capture-screenshots.mjs`](./capture-screenshots.mjs). For SPA apps it logs in via JSON `POST /api/auth/login` (session cookie), forces the theme, navigates each route, and screenshots at deviceScaleFactor 2. **For server-rendered apps** (Laravel/Blade, Livewire) there's no JSON login endpoint — drive the HTML form instead: type into `#email` / `#password`, click `button[type=submit]`, wait for navigation. Pass routes as `name=path` pairs.

```bash
# from inside the client project (so `puppeteer` resolves)
THEME=light BASE=http://localhost:5050 LOGIN_USER=admin@<client>.it LOGIN_PASS=... \
  OUT=$(pwd)/shots-clean node /path/to/capture-screenshots.mjs
THEME=dark  BASE=http://localhost:5050 LOGIN_USER=admin@<client>.it LOGIN_PASS=... \
  OUT=$(pwd)/shots-clean node /path/to/capture-screenshots.mjs   # writes *-dark.png
```

Theme forcing: the script sets `localStorage.theme` before load, emulates `prefers-color-scheme`, and toggles the `.dark` class. Adjust to the app's actual theme mechanism.

For a focused crop (e.g. a detail section), scroll the element into view before the shot, or capture the page non-`fullPage` so only the viewport top is taken.

**Multi-portal apps**: a secondary portal/role can be empty for the seeded user (SicurCert's *cliente* portal had no data for the demo customer). Either seed that role's data or pivot to a portal that has data — never ship an empty-state screenshot. If the app is light-only, skip the dark pass entirely.

## 4. Use them in the deck

- Wrap each PNG in a `.bw` browser frame with the real URL. **No drop-shadow.**
- Light screenshots → white slides; dark screenshots → dark slides. If the app supports both themes, show one screen in both to demonstrate it; if it's light-only, skip dark — don't fake it.
- Keep the app's own logo in the sidebar (it's the real product); the deck adds the client co-brand in the header separately.
- The screenshots show seeded demo data, so no real client PII is exposed — a feature, not a bug. Still get the client's OK before sharing.

## 5. Tear down

```bash
git checkout server/index.ts          # JS app: revert the reusePort/host edit (if any)
docker rm -f pg-<client>             # drop the throwaway Postgres (JS app)
docker rm -f mariadb-<client>        # …or the throwaway MariaDB (Laravel app)
# stop the dev server (kill the tsx / `php artisan serve` process)
```
Keep `seed-demo.ts` and the `shots-clean/` PNGs with the project if you'll iterate on the deck.
