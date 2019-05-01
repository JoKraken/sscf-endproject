define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__Users_JKrak_Documents_FH_6__Semester_2019_sscf_endproject_apidoc_main_js",
    "groupTitle": "C__Users_JKrak_Documents_FH_6__Semester_2019_sscf_endproject_apidoc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/category/create",
    "title": "create category",
    "name": "createCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "FormData",
            "optional": false,
            "field": "category",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/categoryRouter.js",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/category/:catoID",
    "title": "delete category",
    "name": "deleteCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Categories unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "200",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/categoryRouter.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/all",
    "title": "get all category information",
    "name": "getCategory",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "array",
            "description": "<p>of all category</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/categoryRouter.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/item/create",
    "title": "create item",
    "name": "createItem",
    "group": "Item",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "FormData",
            "optional": false,
            "field": "item",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/itemRouter.js",
    "groupTitle": "Item"
  },
  {
    "type": "delete",
    "url": "/item/:itemID",
    "title": "delete item",
    "name": "deleteItem",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Items unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "200",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/itemRouter.js",
    "groupTitle": "Item"
  },
  {
    "type": "post",
    "url": "/item/edit",
    "title": "edit item",
    "name": "editItem",
    "group": "Item",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "FormData",
            "optional": false,
            "field": "item",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/itemRouter.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "/item/:catoid",
    "title": "get items searched by category id",
    "name": "getItems",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Categories unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "array",
            "description": "<p>of the items</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/itemRouter.js",
    "groupTitle": "Item"
  },
  {
    "type": "get",
    "url": "/item/:catoid/:uid",
    "title": "get items searched by category id and user id",
    "name": "getItemsFromUser",
    "group": "Item",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Categories unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "array",
            "description": "<p>of the items</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/itemRouter.js",
    "groupTitle": "Item"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "delete user",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "200",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/all",
    "title": "get all User information",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "array",
            "description": "<p>of all users</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/all/:id",
    "title": "get User information",
    "name": "GetUserById",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "one",
            "description": "<p>user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/isAdmin/:uid",
    "title": "get the check if user is admin",
    "name": "IsAdmin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "200",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>user is not admin</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/changeAdminStatus",
    "title": "change admin status",
    "name": "changeAdminStatus",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "FormData",
            "optional": false,
            "field": "admin",
            "description": "<p>status (boolean)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/changeUserSettings",
    "title": "change user settings",
    "name": "changeUserSettings",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "FormData",
            "optional": false,
            "field": "user",
            "description": "<p>object (username, password)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/create",
    "title": "create user",
    "name": "createUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "FormData",
            "optional": false,
            "field": "user",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "check user",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "FormData",
            "optional": false,
            "field": "user",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>wrong password</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routers/userRouter.js",
    "groupTitle": "User"
  }
] });
