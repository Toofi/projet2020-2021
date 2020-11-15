## Projet 2020-2021

Projet de Quentin Herpoel

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies in each folder, front and back.

```
npm install
```

## Run the environnment

In each folder, you just have to write in a terminal :

```
npm run dev
```

## What's the project

The project is a fuel inventory manager. With a left sidebar, we can choose the product we want to manage. At the right side, we will have an overview with the stock in time, the stock detail, etc. We can click on buttons to add, update or delete a value in the stock. For the add function, the user can enter the value added or substracted, and the app will do the difference with the last value before add the new value. In the overview we can also modify the stock name. In the sidebar we can also add a new stock.

TABLE Stocks_list
id: int
stock_id : int (stock_name id)
stock_date : datetime

TABLE Stock_name
id : int
name : string
stock : int