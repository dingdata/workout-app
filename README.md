## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm install express`

### `npm install --save-dev jest supertest`

### `npm install --save-dev nodemon`

### `npx create-react-app client`

1. After the above - do a npm start to test backend.
2. cd into client to perform `npm run build` followed by a `npm start` - you will see a "react logo"
3. Deploy to Heroku - Add in the following in package JSON Scripts
   "heroku-postbuild": "npm run client:build"
4. In Heroku - Settings - set `SKIP_PREFLIGHT_CHECK=true` in Config Vars

---

## Installing Database "PG and Sequelize" and integrating it with Heroku-Postgres

### `npm install pg pg-hstore sequelize`

### `npm install sequelize-cli -D`

1. Run `npx sequelize db:create` to create local DB
2. Test by doing npm run start
3. should see "SELECT 1+1 AS result"

---

## Update app.js to connect sequelize to DB

## Run `npx sequelize init:migrations` to generate migration scripts

## Run `npx sequelize model:generate --name Exercise` to generate DB model

## Run `npx sequelize init:seeders` to generate seeder scripts

## Run `npx sequelize seed:generate --name Exercise` to generate the seed file

## Run `npx sequelize db:seed:all` to run the seed file

### `npm install express dotenv`

### `npm install react-router-dom`

### `npm install cookie-parser`

### `npm install jsonwebtoken`

### `npm install bcryptjs`

## Setting up your local database

### Create dev database

`npx sequelize db:create`

This reads off of `config/database.js` and will create `workout_app_dev`. This database will be used for your regular development environment.

### Run migrations

`npx sequelize db:migrate`

### Seed your local database

Exercises:

`npx sequelize db:seed --seed db/seeders/20210907040804-Exercise.js`

## Setting up your testing database

### Create test database

`NODE_ENV=test npx sequelize db:create`

This reads off of `config/database.js` and will create `workout_app_test`. This database will be used for your testing environment.

## Installing test DB for local:

1. Make sure your config/database.js file has the correct values
2. Run `npx sequelize-cli db:create --env test` to create db in test env
3. Run `npx sequelize-cli db:migrate --env test` to create the respective models in test env
4. Run `npx sequelize-cli db:seed:all --env test` to seed the data in test env

## Client .env file

There are some env values in client to take note, which heroku will also need to be configured:

```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_API_URL=http://localhost:4000
```

## Server .env file

run `node -e "console.log(require('crypto').randomBytes(256 / 8).toString('hex'));"` to generate secret

```

JWT_SECRET_KEY=xxx

```
