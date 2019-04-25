## Damage report


Live Demo:  https://env-3364758.jelastic.metropolia.fi/

### Users can: 
  - everyone can see all reports
  - Register and Login to the app
  - change the username and password
  - Create, edit and delete their own reports (select category, title, description upload picture and choose gps-position)
  - An admin can give admin status to other users, delete users and create and delete categories
  
  ## Technologies used

* [Nodejs](https://nodejs.org/en/docs/) 
* [MongoDB](https://docs.mongodb.com/) 
* [Google Maps](https://developers.google.com/maps/documentation) 
  

## List of API used

#### User API

* `'/user' - GET` - get all users
* `'/user/:uid' - GET` - get user by id
* `'/isAdmin/:uid' - GET` - check if user is admin by id
* `'/user/:uid' - DELETE` - delete user by id
* `'/login' - POST` - check if user exist
* `'/createUser' - POST` - create user
* `'/changeAdminStatus' - PATCH` - change admin status of an user
* `'/changeUserSettings' - PATCH` - change username and password of an user

#### Caterory API

* `'/category' - GET` - get all categories
* `'/createCategory' - POST` - create category
* `'/category/:catoID' - DELETE` - delete category  by id

#### Item API

* `'/items/:catoid' - GET` - get all items from a specific category (if id null return all)
* `'/items/:catoid/:uid' - GET` - get all items from a specific category and/or user (if id null return all)
* `'/item' - POST` - create item
* `'/edititem' - POST` - edit category
* `'/item/:itemID' - DELETE` - delete item by id





## Author

* **Johanna Kraken** - [JoKraken]


## License

This project is licensed under the ISC License
