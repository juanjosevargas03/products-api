# products-api

description:

to run you must have node js and mongodb installed on your computer and be located in the project folder, then run "npm i" to install the dependencies.
once installed you must run "npm start" which will start the node js server

![image](https://user-images.githubusercontent.com/75379137/146658039-cb65c8d6-3e91-470c-b9f4-f8d8f326e214.png)

When executing the api for the first time, roles are created for the users and a default user with email "admin@localhost" and password "admin" that can be used to sign in the application and returns an access token

![image](https://user-images.githubusercontent.com/75379137/146658274-27c75979-60da-478c-92f1-ae6596083ed7.png)

If you want to register a new user you must send the access token that is returned when you sign in with admin@localhost and run the following endpoint

![image](https://user-images.githubusercontent.com/75379137/146658642-268634ca-9c86-4738-9e13-9806fe1f56c8.png)

endpoint to see all products (to access the endpoints you must send the access token in the headers like this)

![image](https://user-images.githubusercontent.com/75379137/146658493-a6ac42b7-c985-4bd0-9696-c248d5b3bc1b.png)

endpoint to see all categories

![image](https://user-images.githubusercontent.com/75379137/146658862-3af0d9a4-a6e5-4b7b-a526-3e76dd40ac35.png)

endpoint to create a new product (in category send the id of the category )

![image](https://user-images.githubusercontent.com/75379137/146658698-53122a4c-ec51-452f-a419-05751e023c86.png)

endpoint to update a category (you must send the id by url like this)

![image](https://user-images.githubusercontent.com/75379137/146658824-a290a538-4b29-4643-985a-376591578021.png)

endpoint to filter products by name

![image](https://user-images.githubusercontent.com/75379137/146658943-119ed57b-8ec4-4003-8d18-133c65b69704.png)

endpoint to filter products by category

![image](https://user-images.githubusercontent.com/75379137/146658977-7795bcfb-df08-41b3-87e0-39cb2eab2428.png)

endpoint to update product (you must send the id by url like this) code 204 means update successfully

![image](https://user-images.githubusercontent.com/75379137/146659025-421cff8d-1024-4dfc-8a68-dc378a6f1c9d.png)

endpoint to remove a product (you must send the id by url like this)

![image](https://user-images.githubusercontent.com/75379137/146658901-4195f8ee-cb48-45f6-8a08-00cf856b69b8.png)



