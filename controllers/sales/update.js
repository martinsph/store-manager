const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itensSold = req.body;
    const result = await service.update({ id, itensSold });
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
