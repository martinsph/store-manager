const { ObjectId } = require('mongodb');
const connection = require('../connection');

// função recebe a coleção e o novo documento a ser atualizado. Neste caso, um objeto { id, name, quantity }.
// linha 8 desestrutura id e resto de entity (name, quantity) para usar no updateOne.
module.exports = async (collection, { id, name, quantity, itensSold }) => {
  try {
    const connecting = await connection();
    if (itensSold) {
      const result = await connecting.collection(collection).updateOne(
        { _id: ObjectId(id) }, 
        { $set: { itensSold } },
      );
      return result;
    }
    const result = await connecting.collection(collection).updateOne(
      { _id: ObjectId(id) },
      { $set: { name, quantity } },
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
