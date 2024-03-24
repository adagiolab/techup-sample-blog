// Needed for dotenv
require("dotenv").config();

// Needed for Express
var express = require('express')
var app = express()

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(__dirname + '/public'));

// Needed for parsing form data
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

// Needed for Prisma to connect to database
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

// Main landing page
app.get('/', async function(req, res) {
    try {
        const blogs = await prisma.post.findMany();
        // await res.render('pages/home', { blogs: blogs });
        await res.render('pages/home', { blogs: {id: 1, title: "hi", content: "bye"} });
      } catch (error) {
        res.render('pages/home');
        console.log(error);
      } 
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