var express = require('express')
var app = express()

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(__dirname + '/public'));

// Needed for parsing form data
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

// Main landing page
app.get('/', function(req, res) {

    res.render('pages/home');
});

// About page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// New page
app.get('/new', function(req, res) {
    res.render('pages/new');
});

// Submit button clicked on new page
app.post('/new', function(req, res) {
    console.log(req.body.title);
    console.log(req.body.content);
    
    // Loads the homepage
    res.render('pages/home');
});

// Tells the app which port to run on
app.listen(8080);