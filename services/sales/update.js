const product = require('../../models/entity')('sales');

const errors = {
  invalidIdOrQty: { 
    status: 422, 
    code: 'invalid_data', 
    message: 'Wrong product ID or invalid quantity' },
};

module.exports = async ({ id, itensSold }) => {
  itensSold.forEach((element) => {
    if (element.quantity < 1) throw errors.invalidIdOrQty;
  });

  itensSold.forEach((element) => {
    if (typeof element.quantity !== 'number') throw errors.invalidIdOrQty; 
  });

  await product.updateSales({ id, itensSold });

  return {
    _id: id,
    itensSold,
  };
};
