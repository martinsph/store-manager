const connection = require('../connection');

// função recebe somente a coleção e gera uma lista.
module.exports = async (collection) => {
  try {
    const connecting = await connection();
    return connecting.collection(collection).find().toArray();
  } catch (error) {
    console.log(error);
  }
};
