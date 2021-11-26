const product = require('../../models/entity')('sales');

const errors = {
  wrongId: { 
    status: 422, code: 'invalid_data', message: 'Wrong id format' },
};

const isValidId = async (result) => {
  if (result == null) throw errors.wrongId;
};

module.exports = async (id) => {
  const result = await product.getById(id);

  await isValidId(result);

  return result;
};
