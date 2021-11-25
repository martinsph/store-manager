const product = require('../../models/entity')('products');

module.exports = async (newProduct) => product.create(newProduct);
