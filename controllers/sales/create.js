const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const newProducts = req.body;
    const result = await service.create(newProducts);
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
