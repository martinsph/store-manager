const service = require('../../services/products');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.params;
    const product = await service.getByName(name);
    
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
