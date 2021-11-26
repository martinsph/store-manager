const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const result = await service.update({ id, name, quantity });
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
