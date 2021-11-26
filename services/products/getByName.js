const product = require('../../models/entity')('products');

module.exports = async (name) => {
  const result = await product.getByName(name);
  return result;
};
