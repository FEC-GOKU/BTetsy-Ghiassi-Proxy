const express = require('express');
const proxy = require('http-proxy-middleware');
const port = 4321;
app = express();

//seller = reviews
app.use(proxy('/api/seller', {target: 'http://localhost:5000'}));
// products = photo carousel
app.use(proxy('/products', {target: 'http://localhost:4000'}));
// checkout service
app.use(proxy('/api/checkout', {target: 'http://localhost:1234'}));
//item description
app.use(proxy('/api/description', {target: 'http://localhost:3000'}));
app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`listening at port ${port}:`)
});