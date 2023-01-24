import mongoose from "mongoose";
const { config } = require("./config");

const MONGO_URI = config.dbUrl;

async function connect() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    //console.log(config, "config");
    console.log(">>> Db is connected");
  } catch (error) {
    console.log("Algo salio mal", error);
  }
}

export default connect;
