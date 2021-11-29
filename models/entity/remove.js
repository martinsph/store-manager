const { ObjectId } = require('mongodb');
const connection = require('../connection');

// função recebe a coleção e o id a ser deletado.
module.exports = async (collection, id) => {
  try {
    const connecting = await connection();
    const result = await connecting.collection(collection).deleteOne({ _id: ObjectId(id) });

    return result;
  } catch (error) {
    console.log(error);
  }
};
