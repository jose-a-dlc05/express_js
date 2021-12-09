// Networking - http and tcp/udp
// - stateless
// - connectionless
// - flexible
// - HTTP message
// -- start line
// -- req: GET /blog http/1.1
// -- res: http/1.1 200 OK
// -- headers
// --- {key: values}
// ---- content-type:text/html
// ---- content-type: application/json
// ---- Cache-Control:public, max-age=0
// ---- Date:Tue, 23, Nov, 2021 23:51:59 GMT
// -- BLANK LINE
// body
// --- STUFF - HTML, CSS

const { Server } = require('http');

// Node server
// - write headers
// - write body
// -- used the fs module
// - close connection
// - server.listen
// -- 3000
