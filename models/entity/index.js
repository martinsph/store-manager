const create = require('./create');
const list = require('./list');
const getById = require('./getById');
const update = require('./update');
const remove = require('./delete');

module.exports = (collection) => ({
  create: async (entity) => create(collection, entity),
  list: async () => list(collection),
  getById: async (id) => getById(collection, id),
  update: async (entity) => update(collection, entity),
  remove: async (id) => remove(collection, id),
});
