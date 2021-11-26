const express = require('express');
const productRouter = require('./products/router');
const salesRouter = require('./sales/router');

const root = express.Router({ mergeParams: true });

root.use('/products', productRouter);
root.use('/sales', salesRouter);

module.exports = root;
