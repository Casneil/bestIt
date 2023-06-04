# Simple product details view app with email sending service

## Features
- One time password support
- Jwt auth tokens
- Email service for sending login codes
- Protected routes
- Swagger for api documentation
## Tech Stack
**Server:** [NodeJs](https://nodejs.org/en), [Express](https://expressjs.com/de/), [Typescript](https://www.typescriptlang.org/docs/), [Prisma](https://www.prisma.io/), [Nodemailer](https://nodemailer.com/about/), [Swagger](https://swagger.io/), [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)

**Client:** [VueJs](https://vuejs.org/guide/quick-start.html), [Vite](https://vitejs.dev/guide/), [Typescript](https://www.typescriptlang.org/docs/), [Tailwind Css](https://tailwindcss.com/), [Pinia](https://pinia.vuejs.org/introduction.html)


## How to get this project
- Clone this reposoitory to your computer
- Open the cloned project in you favourite editor e.g [VSCode](https://code.visualstudio.com/)

## How to run the backend server
- from your terminal in the project root directiory run the commands stated in the Server Commands section

## How to run the backend server
- from your terminal in the project root directiory run the commands stated in the Client Commands section

## Server Commands
`cd server`

`npm install`

`npx prisma migrate dev --name 'your migration name'` for Database migrations

`npm run dev` to start local server

`prisma-studio` to connect to the database and run web database ui

## Client Commands
`cd client`

`npm install`

`npm run dev` to start local server

## Swagger
[Test Api Endpoints](http://localhost:5000/api-docs)

## FAQ

#### can I use a fake email address to recieve my time password.
No, you will need an actual email address to recieve your login code.

#### I did not recieve a email with a one time password.
Please check your spam folder as sometimes emails ends up there

#### Is this a complete project?
No, this is still WIP and new feautres will be added requently

#### Can I change database provider?
Definitely!, using `npx prisma init --datasource-provider 'your database'`

#### What happen when prisma folder already exists when changing database provider?
You can follow this guide [Upgrading the Prisma layer](https://www.prisma.io/docs/guides/upgrade-guides/upgrade-from-prisma-1/upgrading-the-prisma-layer-postgresql)

## Authors

- [@Casneil Simpson](https://www.github.com/casneil)


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)