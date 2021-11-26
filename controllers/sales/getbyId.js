const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.getById(id);
    
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
