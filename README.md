# everyday

A todo list PWA with some limitations like only being allowed to create a list for the current day. Plus more!

## Branching

There's only 1 DB and environment for now so work on feature branches and PR into main to deploy. Be careful about breaking the DB during development - all changes should happen through migrations.

TODO: setup a local postgres

## Installation

```
npm install
```

## Run locally

```
npm run dev
```

### Prisma

Use the scripts provided in the package.json instead of npx to ensure environment vars are loaded properly:

`npm run db:docs` Serves Prisma docs

`npm run db:generate` Generates the prisma client & docs

`npm run db:migrate` Creates & runs a migration

`npm run db:push` Synchronizes the prisma schema with the database schema

`npm run db:seed` Runs the seed script

`npm run db:studio` Launchs Prisma Studio
