Day-2

- NPM understanding
    
- installing and uninstalling anything basics & advanced
    - **Install**: `npm i <packageName>`
    - **Uninstall**: `npm uninstall <packageName>`
    - **Installing a specific version**: `npm i <packageName>@<version>`

- **Dependencies**: These are the packages and the dependencies of those packages.

- **DevDependencies**: These are packages that are only used during development. Once the app is built and deployed, these packages are no longer needed.

  - **Example**: `npm i nodemon`

- **Scripts**: Understanding default scripts, their path, and custom scripts.

  ```json
  "scripts": {
    "start": "node app.js",        // Starts the application
    "dev": "nodemon app.js",       // Starts the application with nodemon for auto-reloading during development
    "build": "webpack --mode production",  // Bundles the application using webpack for production
    "test": "mocha test"           // Runs tests using the Mocha testing framework
  }
  ```
