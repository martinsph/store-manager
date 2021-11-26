const { ObjectId } = require('mongodb');
const connection = require('../connection');

// função recebe a coleção e o novo documento a ser atualizado. Neste caso, um objeto { id, name, quantity }.
// linha 8 desestrutura id e resto de entity (name, quantity) para usar no updateOne.
module.exports = async (collection, entity) => {
  try {
    const { id, ...entityWithoutId } = entity;
    const connecting = await connection();
    const result = await connecting.collection(collection).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: entityWithoutId,
      },
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};
