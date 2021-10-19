const path = require('path');

const hbs = require('hbs');

const express = require('express');

const app = express();

// relative absolute
// console.log(__dirname);

// console.log(path.join(__dirname, '../public'));

// const staticPath = path.join(__dirname, '../public')

const templatesPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// builtin middleware

// app.use(express.static(staticPath));

// to set the view engine
app.set('view engine', 'hbs')
app.set('views',templatesPath);
hbs.registerPartials(partialsPath);
// template engine route
app.get('/', (req, res)=> {
    res.render('index', {
        channelName: 'unique Singer'
    });
});

app.get('/about', (req, res)=> {
    res.render('about');
});

app.get('/', (req, res)=> {
    res.send("Hello world form the express");
});

app.get('/about', (req, res)=> {
    res.send("Hello world form the about");
});

app.get('/about/*', (req, res)=> {
    res.render("404",{
        errorComment: "Oops this about us page could not be found"
    });
});

app.get('*', (req, res)=> {
    res.render("404",{
        errorComment: "Oops page could not be found, Click here to go back"
    });
});

app.listen(8000, ()=> {
    console.log('listening the port at 8080');
})