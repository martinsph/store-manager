const product = require('../../models/entity')('products');
const getByName = require('./getByName');

const MAX_LENGTH = 5;

const errors = {
  invalidName: { 
    status: 422, code: 'invalid_data', message: '"name" lenght must be at least 5 character long' },
  productExists: { 
    status: 422, code: 'invalid_data', message: 'Product already exists' },
  invalidQty: {
    status: 422, code: 'invalid_data', message: '"quantity" must be larger than or equal to 1' },
  invalidSQtyType: {
    status: 422, code: 'invalid_data', message: '"quantity" must be a number' },
};

const isValidName = (name) => {
  if (name.length <= MAX_LENGTH) throw errors.invalidName;
};

const nameExists = async (name) => {
  const checkName = await getByName(name);
  if (checkName !== null) throw errors.productExists;
};

const isValidQty = (quantity) => {
  if (quantity < 1) throw errors.invalidQty;
};

const isValidQtyType = (quantity) => {
  if (typeof quantity !== 'number') throw errors.invalidSQtyType; 
};

module.exports = async (newProduct) => {
  const { name, quantity } = newProduct;

  isValidName(name);
  await nameExists(name);
  isValidQty(quantity);
  isValidQtyType(quantity);

  product.create(newProduct);
};
