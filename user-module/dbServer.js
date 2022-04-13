const mongoose = require('mongoose');
const createCo = async () => {
  try {
    const db = await mongoose.connect(
      'mongodb://localhost:27017/main-project',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log(db.connection.host);
  } catch (error) {
    console.error(error);
  }
};
module.exports = createCo;
