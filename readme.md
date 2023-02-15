# Bank Api

## An api to fetch all bank branches details

This is a api that allows a user to get details of all the alvaliable brank branches in India

> Data can be fetched through this api at endpoint : /api/banks

## Tech

This api is made using :

-   Node.js
-   Express

## Installation

Bankapi requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the server.

```sh
cd bankapi
npm i
node index.js
```

## Variables for api

To fetch and filter data from api following variables are used :

| Variable | Description              |
| -------- | ------------------------ |
| id       | Bank id                  |
| ifsc     | IFSC code of bank        |
| branch   | Bank branch              |
| city     | City of the bank branchs |
| district | District of bank branchs |
| state    | State of Bank Branchs    |

### Examples

Get all the bank branches in India :

```sh
/api/banks
```

Get all the bank branches in district Mumbai:

```sh
/api/banks?district=MUMBAI
```

Get all the bank branches with Bank_id = 2 and city to Shimla:

```sh
/api/banks?id=2&city=SHIMLA
```
