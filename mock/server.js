const jsonServer = require('json-server');
const path = require('path');

const mock = require(path.join(__dirname, 'db.js'));
const server = jsonServer.create();
const router = jsonServer.router(mock());
const middlewares = jsonServer.defaults();


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use('/api', router);

// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data,
  });
};

server.listen(3004, () => {
  console.log('JSON SERVER is running!');
});
