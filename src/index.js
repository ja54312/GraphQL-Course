import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import connect from "./database";

const app = express();
connect();

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
      messageId: "test",
    },
  })
);

app.listen(3000, () => console.log("server on port 3000"));
