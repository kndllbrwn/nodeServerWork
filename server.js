const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000; 

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) =>{
        if (err) {
            console.log('Unable to append server.log.')
        }
    });
    next();     
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

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
        welcomeMessage: 'Hello World - I got rendered!'
});
});

app.get('/about', (req, res) => {
    // res.send('About page');
    res.render('about.hbs', {
        pageTitle: 'About Page' 
    });    
});

app.get('/projects', (req, res) => {
    // res.send('About page');
    res.render('projects.hbs', {
        pageTitle: 'Project Page',
        projectIntro: 'Here are some projects!' 
    });    
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request',
        response_type: 404
    });
});

app.listen(port, () =>{
    console.log(`Server is up on port ${port}`)
});