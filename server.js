var express = require('express')
var app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Main landing page
app.get('/', function(req, res) {

    // Sample vars (to be replaced with DB calls)
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
      ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/home', {
        mascots: mascots,
        tagline: tagline
    });
});

// About page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/new', function(req, res) {
    res.render('pages/new');
});

// Tells the app which port to run on
app.listen(8080);