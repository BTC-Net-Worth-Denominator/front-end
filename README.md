# Bitcoin Net Worth Calculator Application

This open source project allows you to create a user account, and upload your current assets, and then have a portfolio calculated in BTC opposed to USD.

## Motivation

I believe that in the future, Bitcoin will be the universal globally accepted form of base money. Every good and service will be denominated in it, instead of local fiat currency. This project helps you think in terms of accounting your wealth in BTC, instead of USD.

### Project Links

[Front End Deployment (Vercel)](https://front-end-two-umber.vercel.app/)

[API (Heroku)](https://btc-net-worth.herokuapp.com/)

### Main Contributors

[Peter Conley](https://github.com/peterdavidconley)

## Design Specs

The original front-end design can be found with this URL: https://www.canva.com/design/DAEzcWAX3CE/FSVAQBEJckm9dZaJyDv4cw/view?website#1

## Screenshots



## Tech/framework used

React

## Features

This project is ahead of it's time, interms of common financial thinking. It's meant to change the way we think about money, by switching the base unit of account.

## Project Installation

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Changes will be applied, in real time, to the [Live Vercel Deployment](https://front-end-two-umber.vercel.app/). 

# API Reference

## REGISTER and LOGIN ENDPOINTS

### `[POST] /api/auth/register`

- Request Body:
  - _username required (must be unique)_
  - _password required_

_What You Send_

```json
{
  "username": "john",
  "password": "12345"
}
```

_Server Response_

```json
{
  "message": "Successfully registered john.",
  "user_id": 1
}
```

### `[POST] /api/auth/login`

- Request Body:
  - _username required_
  - _password required_

_What You Send_

```json
{
  "username": "john",
  "password": "12345"
}
```

_Server Response_

```json
{
  "message": "Welcome john",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImJvYiIsImlhdCI6MTY0NjMyNjE1NCwiZXhwIjoxNjQ2NDEyNTU0fQ.-J1wwMHT_H8C1CixAyoc0NFGQmTtvgr_yGDBK8dEZWs"
}
```

<p>You will use the token given by the server for authentication.</p>
<p>User ID should also be stored as this will be required in the header when adding items.</p>

<p>Sample Credentials you can use for login testing (seeded users):</p>

- `username: admin, password: 1234`
- `username: bob, password: bob`

### `[GET] /api/users`

- Returns all users in database, currently public facing but will be restricted.

_Server Response_

```json
{
  "user_id": "1",
  "username": "admin",
},
{
  "user_id": "2",
  "username": "peter",
}
"etc..."
```

### `[GET] /api/users/:user_id`

- Returns user by their ID currently in database, currently public facing but will be restricted.

_Server Response_

```json
{
  "user_id": "1",
  "username": "admin",
}
"etc..."
```

## PORTFOLIO & ASSET ENDPOINTS

### `[GET] /api/assets/

**_RESTRICTED ENDPOINT_** (token required)

- Returns array of all assets in a portfolio for that specific user in the database.

_Server Response_

```json
[   {
        "asset_name": "Real Estate",
        "asset_value": 100000,
        "asset_id": 1,

    },
    {
        "asset_name": "Equities",
        "asset_value": 555000,
        "asset_id": 2,

    }
    "etc..."

]

```
### `[POST] /api/assets/`

**_RESTRICTED ENDPOINT_** (token AND user_id required)

- Adds a portfolio into the database. 
  - **required information:**
  - _asset_name (string)_
  - _asset_value (integer)_

_What You Send:_

```json
[ {
        "asset_name": "Stocks",
        "asset_value": 777000,
        "asset_id": 1,
    },
  {
        "asset_name": "Bonds",
        "asset_value": 1000000,
        "asset_id": 2,
    },
    "etc..."
]
```

_Server Response:_

```json
{
  "Your portfolio consisting of the Assets: Stocks & Bonds have been added"
}
```

### `[PUT] /api/assets/:asset_id`

**_RESTRICTED ENDPOINT_** (token AND user_id required)

- Updates current asset in the database. 
  - **required information:**
  - _asset_name (string)_
  - _asset_value (integer)_


_What You Send:_

```json
[ {
        "asset_name": "Stocks",
        "asset_value": 777000,
        "asset_id": 1,
    }
]
```

_Server Response:_

```json
{
  "Your asset ${asset_name} has been updated."
}
```

### `[GET] /api/assets/:asset_id`

**_RESTRICTED ENDPOINT_** (token required)

- Returns the single asset associated with that asset_id. 

_Server Response:_


```json
{
  "asset_name": "Bonds",
  "asset_value": 1000000,
  "asset_id": 2,
  "username": "admin"
}
```

### `[DELETE] /api/assets/:asset_id`

**_RESTRICTED ENDPOINT_** (token required)

- Deletes the single asset with provided asset_id.

_Server Response:_

```json
{
    "message": "Deleted the asset ${asset name}."
}
```


## How to Use

1. User creates account by visiting /create-account page and submitting an username and password
2. User adds assets to their portfolio, one by one, on page /add-assets
3. User assigns USD value to each asset on page /add-assets
4. User can view entire portfolio denominated in BTC on portfolio page /portfolio

## Contribute

Contribute to this project by submitting a pull request or submitting your information to this [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdpodZtqpk_xZt77XGe2zGD0pjlc67T_6TwNAPHW54LIWGMXg/viewform?usp=sf_link)

## License

©MIT

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

