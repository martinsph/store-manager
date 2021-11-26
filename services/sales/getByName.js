const product = require('../../models/entity')('sales');

module.exports = async (name) => {
  const result = await product.getByName(name);
  return result;
};
