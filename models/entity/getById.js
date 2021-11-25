const connection = require('../connection');

// função recebe a coleção e o novo documento a ser adicionado. Neste caso, um objeto { name, quantity }.
module.exports = async (collection, id) => {
  try {
    const connecting = await connection();
    return connecting.collection(collection).findOne(id);
  } catch (error) {
    console.log(error);
  }
};
