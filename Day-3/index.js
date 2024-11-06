const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about',function(req,res){
    res.send("about page haow")
})

app.get('/contant',function (req,res) {
    res.send('contant page haow')
})

// Define a middleware function that runs on every request
// Logs "heelo !" to the console, then calls `next()` to continue to the next route or middleware
app.use(function (req,res,next) {
    console.log("heelo !");
    next();
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
