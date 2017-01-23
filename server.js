const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.send({
    //     name: 'Ken',
    //     likes: [
    //         'Lifting',
    //         'Coding'
    //     ]
    // });
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Hello World - I got rendered!'
});
});

app.get('/about', (req, res) => {
    // res.send('About page');
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });    
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request',
        response_type: 404
    });
});

app.listen(3000, () =>{
    console.log('Server is up on port 3000')
});