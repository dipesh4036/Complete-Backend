# DAY - 3
- **Introduction to Express.js**  
  Express.js is a web application framework for Node.js.

    - **Express.js is an NPM package**  
    Express.js is a package available via the Node Package Manager (NPM).

    - **Express is a Framework**  
    Express.js is a framework built on top of Node.js, designed to simplify web application development.

    - **Manages everything from receiving the request and giving the response**  
    Express.js handles all aspects of request processing, from receiving client requests to sending the appropriate responses back to the client.


- **Setting up a basic Express application.**  
    - `npm i express`

- **Routing**  
    ```javascript
    const express = require('express');  
    const app = express();  

    app.get('/', function(req, res) { 
        res.send("Home page !");  
    });

    app.listen(3000, () => {  
        console.log('Server is running on http://localhost:3000');
    });
    ```

- **Middleware**

    - Whenever the server accepts a request, and if you intercept that request between the time it arrives and reaches the route, and perform some actions on it, this element is called middleware.
    ``` javascript
    app.use((req, res, next) => {
    console.log('middleware');
    next(); 
    });
    ```
- **Request and Response Handling**
    - In Express.js, request and response are objects that represent the HTTP request and the HTTP response, respectively.

- **Error Handling**
   - In Express.js, error handling is an important part of ensuring that your application can gracefully manage unexpected issues. You can handle errors by using middleware specifically designed for this purpose.
    ``` javascript
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('Home Page!');
    });

    // Route to simulate an error
    app.get('/error', (req, res) => {
        throw new Error('Something went wrong!');
    });

    // Default error handling middleware (after all routes)
    app.use((err, req, res, next) => {
        console.error(err.stack);  // Log the error stack
        res.status(500).send('Something went wrong!');  // Send a 500 status code with a message
    });

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
    ```