const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const result = await service.create({ name, quantity });
    return res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
