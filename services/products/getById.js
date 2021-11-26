const product = require('../../models/entity')('products');

module.exports = async (id) => {
  const result = await product.getById(id);
  return result;
};
