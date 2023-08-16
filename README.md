# Online Book Shop Portfolio Project

## Overview

> ### My TypeScript + React + Redux Toolkit + Node + Express + Prisma + PostgreSQL book shop portfolio project
> I used official Redux template for Vite. [This available here](https://github.com/reduxjs/redux-templates)

## Table of Contents

1. [Routing](#routing)
2. [Run locally](#run-locally)
3. [Client README](/client/README.md)
4. [Server README](/server/README.md)
5. [Port](#port)
6. [License](#license)

## Routing

- Home page (URL: /)
- Books list page (URL: /books)
- Detailed book page (URL: /book-name-slug + book-unique-id)
- Author page (URL: /author-name-slug + author-unique-id)
- Cart page (URL: /cart)

## Run locally

You need have Node v18.13.0 or higher.

```sh
cd client
npm ci
npm run dev

cd server
npm ci
npm run dev
```

## Port

Client uses port 5173.
Server uses port 8080.

## License

MIT
