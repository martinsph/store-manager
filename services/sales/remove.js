const product = require('../../models/entity')('sales');

const errors = {
  wrongId: { 
    status: 422, code: 'invalid_data', message: 'Wrong sale ID format' },
};

const isValidId = async (getProduct) => {
  if (getProduct == null) throw errors.wrongId;
};

module.exports = async (id) => {
  const getProduct = await product.getById(id);

  await isValidId(getProduct);

  const result = await product.remove(id);
  
  return result;
};
