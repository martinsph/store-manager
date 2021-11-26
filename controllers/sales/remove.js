const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.remove(id);

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
