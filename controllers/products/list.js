const service = require('../../services/products');

module.exports = async (req, res, next) => {
  try {
    const result = await service.list();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
