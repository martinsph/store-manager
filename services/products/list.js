const products = require('../../models/entity')('products');

module.exports = async () => {
  const result = await products.list();
  return result;
};
