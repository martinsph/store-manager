const service = require('../../services/products');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const result = await service.create({ name, quantity });
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
