const express = require('express');
const productRouter = require('./products/router');

const root = express.Router({ mergeParams: true });

root.use('/products', productRouter);
// root.use('/sales', require('./sales/router'));

module.exports = { 
  root,
};
