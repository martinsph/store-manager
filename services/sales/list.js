const products = require('../../models/entity')('sales');

module.exports = async () => {
  const result = await products.list();
  const allProducts = { sales: result };
  return allProducts;
};
