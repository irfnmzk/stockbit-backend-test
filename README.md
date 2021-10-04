# stockbit-backend-test
This repository contains the answer for online test for backend at stockbit

## Getting started for TEST-2
```sh
cd test-2
```

```sh
yarn install
```

```sh
cp .env.example .env
```

configuration
```sh
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=movie
DB_USER=root
DB_PASS=
```

Run application
```sh
yarn start
```

## Example for TEST-2
- Search movie
```sh
http://localhost:3000/search?apikey=faf7e5bb&s=Batman&page=2
```

- Detail Movie
```sh
http://localhost:3000/tt4853102/detail
```
