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

app.use(function (req,res,next) {
    console.log("heelo !");
    next();
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});