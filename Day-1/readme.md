# Node.js Fundamentals - Day 1

## Introduction
This guide covers the fundamental concepts of Node.js and basic server-side development.

## Topics Covered

### 1. Introduction to Node.js
- Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine
- Enables server-side JavaScript execution

### 2. Installation
- Node.js installation guide
- NPM (Node Package Manager) setup

### 3. Node.js Modules
- Understanding module system
- Working with built-in modules

### 4. File System Operations
Common file handling operations using the `fs` module:

#### Write File
```javascript
const fs = require('fs');

fs.writeFile('hello.txt', 'hello how are you!', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('file saved');
    }
});
```

#### Read File
```javascript
fs.readFile('hello.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
```

#### Append File
```javascript
fs.appendFile('hello.txt', 'I am Fine!', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('file updated');
    }
});
```

#### Rename File
```javascript
fs.rename('hello.txt', 'hello1.txt', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('file renamed');
    }
});
```

#### Delete File
```javascript
fs.unlink('hello1.txt', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('file deleted');
    }
});
```

#### Copy File
```javascript
fs.copyFile('hello.txt', 'hello2.txt', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('file copied');
    }
});
```

### 5. HTTP Module and Basic Server
Creating a simple HTTP server:

```javascript
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    // Send the response body
    res.end('Hello, World!\n');
});

// The server listens on port 3000
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
```
