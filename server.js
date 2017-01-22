const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Ken',
        likes: [
            'Lifting',
            'Coding'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About page');    
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request',
        response_type: 404
    });
});

app.listen(3000);