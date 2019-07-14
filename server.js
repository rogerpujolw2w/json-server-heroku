const jsonServer = require('json-server');
const auth = require('json-server-auth');
 
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
// /!\ Bind the router db to the app
const port = process.env.PORT || 3000;
app.db = router.db;

// You must apply the auth middleware before the router
app.use(middlewares);
app.use(auth);

app.use(router);
app.listen(port);
/* const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(port); */