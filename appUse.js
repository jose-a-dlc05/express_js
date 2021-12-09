const express = require('express');
const app = express();

// Express = 2 things
// 1. Router
// 2. Middleware that comprises a web framework

// Req ---MIDDLEWARE INTERCEPTS---> Res

// Middleware function is ANY function that has access to the req, res, next object

// 1. Request comes in
// 2. We need to validate the user, sometimes
// 3. We need to store some things in the DB
// 4. If there is data from the user we need to parse it and store it
// 5. Res

function validateUser(req, res, next) {
	// get info out of the req object
	// do some stuff with db
	res.locals.validated = true;
	console.log('Validated ran!');
	next(); // hand control off to the next middleware in the cycle
}

app.use(validateUser); // similar to how app.get functions

app.get('/', (req, res, next) => {
	res.send('<h1>Main Page</h1>');
	console.log(res.locals.validated);
});
app.get('/admin', (req, res, next) => {
	res.send('<h1>Admin Page</h1>');
	console.log(res.locals.validated);
});

app.listen(3000);
