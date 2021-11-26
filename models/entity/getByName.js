const connection = require('../connection');

// função recebe a coleção e o filtro por nome.
module.exports = async (collection, name) => {
  try {
    const connecting = await connection();
    return connecting.collection(collection).findOne(name);
  } catch (error) {
    console.log(error);
  }
};
