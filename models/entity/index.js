const create = require('./create');
const list = require('./list');
const getById = require('./getById');
const getByName = require('./getByName');
const update = require('./update');
const remove = require('./remove');

module.exports = (collection) => ({
  create: async (entity) => create(collection, entity),
  list: async () => list(collection),
  getByName: async (name) => getByName(collection, name),
  getById: async (id) => getById(collection, id),
  update: async (entity) => update(collection, entity),
  remove: async (id) => remove(collection, id),
});
