const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("mongoDb connected" + conn.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
