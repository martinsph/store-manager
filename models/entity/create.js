const connection = require('../connection');

// função recebe a coleção e o novo documento a ser adicionado. Neste caso, um objeto { name, quantity }.
module.exports = async (collection, entity) => {
  try {
    const connecting = await connection();
    return connecting.collection(collection).insertOne(entity);
  } catch (error) {
    console.log(error);
  }
};
