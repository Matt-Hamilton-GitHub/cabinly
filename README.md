<div align="center">

# 🏔️ Cabinly

**Build your own perfect trip.** Choose a destination, a cabin, and your activities independently, and earn loyalty rewards for every adventure.

A full-stack travel booking platform built with **Next.js 15 (App Router)**, **TypeScript**, **MongoDB** and **Tailwind CSS**.


<!-- Add a hero screenshot or GIF here: -->
<!-- ![Cabinly landing page](./docs/hero.png) -->

</div>

---

## Overview

Most travel sites sell rigid packages. Cabinly lets travellers compose a trip from independent parts:

1. **Pick a destination** from curated places, filtered by season, type, country and activity.
2. **Choose a cabin**, from cosy retreats to luxury villas, with live availability.
3. **Add activities and guides**, then book. Every booking earns **Summit Points** that unlock loyalty tiers.

The goal of the project was to build a realistic, production-style application end to end: data modelling, authentication, a booking flow with pricing logic, a polished design system, and a deployment pipeline. It is not a tutorial clone.

---

## Features

### For travellers
- **Destination discovery:** searchable, filterable places with multi-facet filters (season, type, country, activity) and live result counts per filter option.
- **Rich destination pages:** hero, stats, about, cabin selector, guides, activities with sign-up, reviews, and a sticky booking sidebar.
- **Flexible booking flow:** pick dates, adults and children (capped by cabin capacity), and optional activities. The price breakdown updates live: cabin nights, per-guest activities, and a 7% service fee.
- **24-hour reservation hold:** a booking is held while the traveller confirms through an emailed link. Expired, cancelled, already-confirmed and invalid links each get a dedicated status page.
- **Account area:** profile, trips, medals, rewards and settings tabs.
- **Summit Points loyalty system:** four tiers (Explorer → Adventurer → Pioneer → Summit) driven by bookings and completed activities.
- **Activities directory:** browse all activities by category, each linking back to the destination that offers it.

### Engineering highlights
- Secure, cookie-based authentication (see [Security](#security)).
- Fully typed domain model shared between API and UI.
- Server-side pricing is the source of truth, not the client (see [Roadmap](#roadmap)).
- Consistent, hand-built design system with no component library.

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | **Next.js 15** (App Router, Route Handlers, Server and Client Components) |
| Language | **TypeScript** (strict mode, no `any`, enforced by ESLint) |
| Styling | **Tailwind CSS**, custom design tokens, CSS keyframe animations |
| Icons | `lucide-react` |
| Database | **MongoDB** (Atlas) with **Mongoose** |
| Auth | **JWT** in an `httpOnly` cookie, passwords hashed with **bcryptjs** |
| Data fetching | Custom React hooks (`useActivities`, `useUserProfile`, `useUserBookings`) over TanStack Query-style caching |
| Hosting | **Vercel** |
| Tooling | ESLint (`@typescript-eslint`, `react-hooks`), `npm audit` |

---

## Architecture

```
app/
├── api/                     # Route Handlers (REST-style endpoints)
│   ├── places/              #   destinations, filtering
│   ├── activities/
│   ├── bookings/            #   create booking, confirm via emailed token
│   └── validate-token/      #   session check
├── places/                  # Discovery page + [id] destination detail
├── activities/              # Activities directory
├── booking/confirmed/       # Booking status page (Suspense-wrapped searchParams)
├── account/                 # Authenticated dashboard
├── _components/             # UI: landing sections, PlaceCard, place.components/*
├── _hooks/                  # Data hooks (React Query-style)
├── contexts/                # UserContext (auth state)
├── lib/types.ts             # Shared domain types
└── mongodb.ts / mdb-models/ # DB connection + Mongoose schemas
```

### Domain model

The core entities are `Place`, `Cabin`, `Activity`, `Guide`, `Review`, `User` and `Booking`. A `Place` aggregates its cabins, activities, guides, reviews and available date windows. Coordinates are stored as **GeoJSON `Point`s**, so the schema is ready for geospatial queries.

```ts
type TPlace = {
  _id: string
  title: string
  country: string
  seasons: SeasonsType[]            // 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'All year'
  coordinates: GeoPoint             // { type: 'Point', coordinates: [lng, lat] }
  cabinsRef: CabinType[]
  activities: ActivityType[]
  guides: GuideType[]
  reviews: ReviewType[]
  availableDates: AvailableDateType[]
  // ...
}
```

### Booking flow

```
Select dates + cabin + guests + activities
        │
        ▼
Client computes a live price preview
        │  POST /api/bookings
        ▼
Booking created as "pending" ──► confirmation email with signed link
        │                                   │
        │ (24h hold)                        ▼
        ▼                           Link clicked → "upcoming"
 Expired → auto-cancelled                   │
                                            ▼
                                  Summit Points awarded
```

---

## Technical decisions worth discussing

- **Authentication without a third-party service.** Passwords are hashed with `bcryptjs` (pure JS, so it deploys cleanly on serverless, unlike native `bcrypt`). Sessions are JWTs delivered in an `httpOnly`, `sameSite=lax`, `secure`-in-production cookie so the token is never reachable from client JS. Sign-up logs the user in immediately.
- **MongoDB on serverless.** Each Vercel function invocation can open a new connection, so the connection is **cached on `globalThis`** to avoid exhausting Atlas's connection limit.
- **Type safety as a build gate.** The shared `types.ts` is the single source of truth. Components are written against it with no `any` casts, and `no-explicit-any` is enforced in CI-style builds, which caught several latent bugs (array vs string image fields, argument-order mistakes in date maths, mismatched prop names).
- **Next.js 15 correctness.** `useSearchParams()` is wrapped in `<Suspense>` so pages prerender, and relative `fetch('/api/...')` is used on the client so the same code works on localhost, preview deployments and production.
- **Filter UX with live counts.** The places page computes, for each filter option, how many results it *would* yield given the other active filters, so users never pick a dead-end combination.
- **Hand-rolled design system.** Deep teal and gold palette, serif display type, layered shadows, hairline gradients and reusable motion (shimmer, fade-up, float), all built with Tailwind arbitrary values rather than a UI kit.
- **Dependency hygiene.** Deployed on a patched Next.js release after reviewing published security advisories, with `npm audit` triaged into runtime vs dev-only findings.

---

## Security

- Passwords hashed with bcrypt (cost factor 10). No plaintext is stored or logged.
- JWT stored in an `httpOnly` cookie, so it is not readable by JavaScript and is protected against XSS token theft.
- Cookies are `secure` in production and `sameSite=lax`.
- Secrets (`JWT_SECRET`, the database URI) come from environment variables only.
- Input validation on auth endpoints, generic error responses to the client, and server-side logging of failures.
- Dependencies kept on patched Next.js releases.

---

## Getting started

### Prerequisites
- Node.js 20+
- A MongoDB database (a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster works)

### Setup

```bash
git clone https://github.com/YOUR-USERNAME/cabinly.git
cd cabinly
npm install
```

Create `.env.local`:

```bash
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/cabinly?retryWrites=true&w=majority
JWT_SECRET=<a long random string>
```

Generate a secret with `openssl rand -base64 48`.

```bash
npm run dev       # http://localhost:3000
npm run build     # production build (type-checks and lints)
npm run start     # serve the production build
```

### Deploying to Vercel

1. Import the repository in Vercel.
2. Add `MONGODB_URI` and `JWT_SECRET` under **Settings → Environment Variables** (Production and Preview).
3. In MongoDB Atlas → **Network Access**, allow `0.0.0.0/0` (Vercel functions have no fixed IPs; the database user and password still protect access).
4. Deploy. Runtime errors appear under **Deployments → Logs**.

---

## Roadmap

- [ ] **Server-authoritative pricing:** recompute `totalPaid` (cabin nights, activities, fee, discounts) on the server instead of accepting it from the client.
- [ ] Apply cabin discounts consistently in the booking total.
- [ ] Payments (Stripe) and refund handling for cancellations.
- [ ] Automated tests: unit tests for pricing and date logic, Playwright for the booking flow.
- [ ] Map view of destinations using the stored GeoJSON coordinates and `$near` queries.
- [ ] Rate limiting on auth endpoints.
- [ ] Image optimisation via a CDN.

---

## What this project demonstrates

- Designing and shipping a **full-stack product**, not just a UI.
- **Modern Next.js** patterns: App Router, route handlers, Suspense boundaries, client/server boundaries.
- **Strict TypeScript** across a non-trivial domain model.
- **Secure auth** and serverless-aware database handling.
- **Production deployment** concerns: environment config, connection pooling, dependency security, build-time correctness.
- **Front-end craft**: a cohesive, accessible-by-default visual system built from scratch.

---

## Author

**Matt Hamilton**
[LinkedIn]([https://www.linkedin.com/in/matt-hamilton-v/] · matt.hamilton.v@gmail.com

---

<sub>Cabinly is a portfolio project. Destinations, cabins and reviews are sample data.</sub>
