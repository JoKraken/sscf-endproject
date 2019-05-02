## Damage report


Live Demo:  klick [here](https://env-3364758.jelastic.metropolia.fi/)

### Users can: 
  - everyone can see all reports (in list and on map)
  - Register and Login to the app
  - change the username and password
  - Create, edit and delete their own reports (select category, title, description, upload picture and choose gps-position)
  - An admin can give admin status to other users, delete users and create and delete categories
  
  ## Technologies used

* [Nodejs](https://nodejs.org/en/docs/) 
* Express js
* [MongoDB](https://docs.mongodb.com/) 
* [Google Maps](https://developers.google.com/maps/documentation) 
* Jelastic  
* WebStorm

## List of API used

#### User API

* `'/user' - GET` - get all users
* `'/user/user/:uid' - GET` - get user by id
* `'/user/isAdmin/:uid' - GET` - check if user is admin by id
* `'/user/:uid' - DELETE` - delete user by id
* `'/user/login' - POST` - check if user exist
* `'/user/create' - POST` - create user
* `'/user/changeAdminStatus' - PATCH` - change admin status of an user
* `'/user/changeUserSettings' - PATCH` - change username and password of an user

#### Caterory API

* `'/category' - GET` - get all categories
* `'/category/create' - POST` - create category
* `'/category/:catoID' - DELETE` - delete category  by id

#### Item API

* `'/item/:catoid' - GET` - get all items from a specific category (if id null return all)
* `'/item/:catoid/:uid' - GET` - get all items from a specific category and/or user (if id null return all)
* `'/item/create' - POST` - create item
* `'/item/edit' - POST` - edit category
* `'/item/:itemID' - DELETE` - delete item by id

For more information (apidoc) klick [here](https://env-3364758.jelastic.metropolia.fi/apidoc).




## Author

* **Johanna Kraken** - [JoKraken]


## License

This project is licensed under the ISC License
