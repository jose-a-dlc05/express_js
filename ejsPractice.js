// Initialize the path native module to a const path
const path = require('path');

// Initialize express and assign it to const express
// Call the express() function which is really invoking createApplication()
const express = require('express');
const app = express();

// Initialize helmet and assign it to const helmet
// helmet secures HTTP headers that are returned by your Express apps
// const helmet = require('helmet');
// app.use(
// 	helmet({
// 		contentSecurityPolicy: false,
// 	})
// );

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

// 4. We pass that res.render 2 things:
// - the file we want to use
// - the data we want to send to that file
// 5. Express uses the node module for our specified view engine and parses the file.
// - that means, it takes the HTML/CSS/JS and combines it with whatever "node" there is in the file
// 6. The final result of this process is a compiled product of things the browser can read
// - HTML, JS, CSS

function validateUser(req, res, next) {
	// ...validated logic
	res.locals.validated = true;
	next();
}

app.use(validateUser);

app.get('/', (req, res, next) => {
	// the data we want to send, in the 2nd argument, is going to be appended to res.locals
	res.render('index', {
		msg: 'Success!',
		msg2: 'Failures are Success!',
		html: `<p><img src='https://firstinfreedomdaily.com/wp-content/uploads/2019/10/Raleigh-NC-Raleigh-Skyline-visitraleigh.jpg'/></p>`,
	});
});

app.listen(3000, () => {
	console.log('Successfully listening on port 3000');
});
