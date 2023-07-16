# Todo-Backend

This project was developed using Node.js within a timeframe of 12 hours. It has been successfully deployed on [render](https://render.com). <br>Below, you can find information about its usage and the technologies utilized:
[live version](https://todolist-node-86uh.onrender.com/)

---

## Create an user

API : `/users/signin` <br>
Method : **POST** <br>
Body : `email` , `password` , `name` (optional)

> after sign in you have to verify your email (verification email gonna send in you Email address)

## Login user

API : `/users/login` <br>
Method : **GET** <br>
Body : `email` , `password` <br>

to login your account you need your `email` and `password`

- as response you become a secret `Token`

---

> for todo items you need the login `Token`

send the token in header `auth`

## Create a todo item

API : `/todo` <br>
Method : **POST**<br>
Body : `title`

## GET todo List

API : `/todo` <br>
Method : **GET**

## GET a Todo detail

API : `/todo/<todoID>` <br>
Method : **GET**

## Delete a Todo

API : `/todo/<todoID>` <br>
Method : **DELETE**

## Update a Todo title

API : `/todo/<todoID>` <br>
Method : **PUT**

## Set a Todo is process

API : `/todo/process/<todoID>` <br>
Method : **PUT**

## Set a Todo as done

API : `/todo/done/<todoID>` <br>
Method : **PUT**

---

Technologies/Packages: The project incorporates various technologies, including but not limited to:

- Express
- mongoose
- express-validator
- NodeMailer
- dotenv
- jsonwebtoken
