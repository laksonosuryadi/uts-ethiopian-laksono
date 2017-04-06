# uts-ethiopian-laksono

Description:

Live Coding Mid Phase 2.
This is a REST API CRUD MVC database project, using mongodb as the database and also Express JS Framework.

Steps to run this program:
1. npm install
2. npm start
3. run it on localhost:3000/`endpointname`, using [POSTMAN](https://www.getpostman.com/) app

-----
## List of Endpoints

### Food

|Route | HTTP Method | Description |
|------|:----:|-------------|
|`/foods/` | POST | Add new Food to Database |
|`/foods/` | GET | Get all Foods from Database |
|`/foods/:foodid` | GET | Get 1 Food from Database |
|`/foods/:foodId` | PUT | Update 1 food info in Database |
|`/foods/:foodId` | DELETE | Remove 1 food from Database |


### Restaurant

|Route | HTTP Method | Description |
|------|:----:|-------------|
|`/restaurants/` | POST | Add new Restaurant to Database |
|`/restaurants/` | GET | Get all Restaurants from Database |
|`/restaurants/:restaurantid` | GET | Get 1 Restaurant from Database |
|`/restaurants/:restaurantId` | PUT | Update 1 Restaurant info in Database |
|`/restaurants/:restaurantId` | DELETE | Remove 1 Restaurant from Database |
