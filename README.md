# everyday

A todo list PWA with some limitations like only being allowed to create a list for the current day. Plus more!

## Branching

Feature branches are PRd into `development` which deploys and acts as the staging env. `development` is merged into `main` to deploy to production.

## Installation

```
npm install
```

## Run locally

```
npm run dev
```

### Prisma

Use the scripts provided in the package.json instead of npx because prisma doesn't load env vars from .env.local by default:

`npm run db:docs` Serves Prisma docs

`npm run db:generate` Generates the prisma client & docs

`npm run db:migrate` Creates & runs a migration

`npm run db:push` Synchronizes the prisma schema with the database schema

`npm run db:seed` Runs the seed script

`npm run db:studio` Launchs Prisma Studio
