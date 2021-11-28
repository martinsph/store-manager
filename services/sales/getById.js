const product = require('../../models/entity')('sales');

const errors = {
  wrongId: { 
    status: 404, code: 'not_found', message: 'Sale not found' },
};

const isValidId = async (result) => {
  if (result == null) throw errors.wrongId;
};

module.exports = async (id) => {
  const result = await product.getById(id);

  await isValidId(result);

  return result;
};
