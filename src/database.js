import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root123@cluster-testing.jqptvdz.mongodb.net/graphql",
      {
        useNewUrlParser: true,
      }
    );
    console.log(">>> Db is connected");
  } catch (error) {
    console.log("Algo salio mal", error);
  }
}

export default connect;
