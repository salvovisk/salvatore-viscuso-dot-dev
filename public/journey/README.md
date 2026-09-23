# Journey captures — as built

All eight frames are real captures, taken 20 Sep 2026 against the live API with the shared
test account (`Moreno`). Web shots are 2880×1800 (1440×900 at 2×) via Playwright, reusing
the app repo's own `auth.setup.ts` login. App shots are 1320×2868 from the iPhone 6.9"
simulator.

| Frame | File | Source | Route |
|-------|------|--------|-------|
| 01 Arrival | `web-01-hero.png` | web | `/` |
| 02 The directory | `web-03-concorsi.png` | web | `/concorsi` |
| 03 The gate | `web-04-signin.png` | web | `/signin` |
| 04 The morning | `web-05-dashboard.png` + `app-03-dashboard.png` | both | `/dashboard` |
| 05 Where a plan starts | `app-02-studio.png` | app | `(tabs)/studio` |
| 06 The run | `app-05-quiz.png` | app | `(app)/simulatore-run` |
| 07 Choosing the questions | `app-04-simulatore.png` | app | `(tabs)/simulatore` |
| 08 The residue | `web-09-criticals.png` | web | `/criticals` |

`app-04`, `app-05`, `app-06` and `app-07` come from the mobile repo's store-screenshot
pipeline (`goldie/out/raw/iphone-6.9/`, captured 14 Sep on the demo account), which is why
their status bar reads a clean 09:41. `app-02` and `app-03` were taken live on 20 Sep.

## What the captures do NOT show, and why

The test account has **no active study plan**. So `/dashboard` and `(tabs)/studio` show
their empty states, and three frames from the original plan could not be taken at all:

- the dashboard with a plan running ("Continua studio" + plan name),
- the day timeline with completed / current / future days,
- a live web quiz run.

Creating that data means writing to the **production** API, which was deliberately not
done. Frame 04's caption was rewritten to make the empty state the point rather than hide
it, and frame 05 now covers where a plan begins instead of what one looks like mid-flight.

To upgrade those frames later: seed a plan on the account, then re-run the capture spec
(kept out of the app repo — see the portfolio pack) and swap `web-05-dashboard.png`. The
caption keys `j06_04_*` and `j06_05_*` in `src/i18n/` would need rewording to match.

## Spare captures, not currently wired

`web-06-plan.png` (the empty `/studio` picker), `web-07-wizard.png` (empty custom-plan
builder), `web-alt-simulatore.png`, `web-alt-dataset.png`, `app-07-concorsi.png`.
