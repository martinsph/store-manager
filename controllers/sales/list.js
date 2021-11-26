const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const result = await service.list();
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
