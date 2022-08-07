# Cryptocurrency exchanges from Coingecko API

## Specs
Using the Coingecko public API (https://www.coingecko.com/en/api), build an application that will serve as a directory of cryptocurrency exchanges. The main page should be a list with the first ten exchanges with some high-level information (name, country, URL, logo, trust rank).

When the user clicks on an exchange, show its details on a separate page. Included in those details should be the name, country, trust rank, logo, year of establishment, social media links, description, and a back-to-main-page button.

## Tech stack

- create-next-app
- TypeScript
- ESLint (`eslint-config-google`)
- `husky` & `lint-staged`
- `tailwindcss`

## Getting the project up and running

```bash
yarn install
# development
yarn dev
# production
yarn build
yarn start
```