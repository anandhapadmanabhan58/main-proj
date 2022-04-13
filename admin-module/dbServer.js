const mongoose = require('mongoose');
const createConnection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGOURL);
    console.log(db.connection.host);
  } catch (error) {
    console.log(error);
  }
};
module.exports = createConnection;
