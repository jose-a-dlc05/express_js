// Initialize the path native module to a const path
const path = require('path');

// Initialize express and assign it to const express
// Call the express() function which is really invoking createApplication()
const express = require('express');
const app = express();

// Initialize helmet and assign it to const helmet
// helmet secures HTTP headers that are returned by your Express apps
const helmet = require('helmet');
app.use(helmet());

// serve up static files
app.use(express.static('public'));
// parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());

// https://expressjs.com/en/guide/using-template-engines.html
// app.set(), takes 2 args:
// 1. Key
// 2. Value
app.set('view engine', 'ejs'); // The default engine extension to use when omitted
app.set('views', path.join(__dirname, 'views')); // A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array (process.cwd() + '/views')

// 1. Express as we know it happens. This File.
// 2. We define a view engine
// - EJS
// - Mustache
// - Handlebars
// - Jade/Pug
// 3. Inside one of our routes, we have a res.render
// 4. We pass that res.render 2 things:
// - the file we want to use
// - the data we want to send to that file
// 5. Express uses the node module for our specified view engine and parses the file.
// - that means, it takes the HTML/CSS/JS and combines it with whatever "node" there is in the file
// 6. The final result of this process is a compiled product of things the browser can read
// - HTML, JS, CSS

app.get('/', (req, res, next) => {
	res.render('index');
});

app.listen(3000, () => {
	console.log('Successfully listening on port 3000');
});
