const product = require('../../models/entity')('products');

const MAX_LENGTH = 5;

const errors = {
  invalidName: { 
    status: 422, 
    code: 'invalid_data', 
    message: '"name" length must be at least 5 characters long' },
  invalidQty: {
    status: 422, code: 'invalid_data', message: '"quantity" must be larger than or equal to 1' },
  invalidSQtyType: {
    status: 422, code: 'invalid_data', message: '"quantity" must be a number' },
};

const isValidName = (name) => {
  if (name.length <= MAX_LENGTH) throw errors.invalidName;
};

const isValidQty = (quantity) => {
  if (quantity < 1) throw errors.invalidQty;
};

const isValidQtyType = (quantity) => {
  if (typeof quantity !== 'number') throw errors.invalidSQtyType; 
};

module.exports = async (newProduct) => {
  const { id, name, quantity } = newProduct;
  const productName = name;
  const productQty = quantity;

  isValidName(name);
  isValidQty(quantity);
  isValidQtyType(quantity);

  await product.update(newProduct);

  return { 
    _id: id,
    name: productName,
    quantity: productQty,
  };
};
