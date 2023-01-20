import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query{
    hello: String
    greet(name:String!): String
    tasks:[Task]
    Users:[User]
}
type Task {
  _id: ID
  title: String!
  description: String!
  number:Int
}
type User{
  _id:ID
  firstName: String!
  lastName: String!
  age: Int!
}
input TaskInput {
  title: String!
  description: String!
  number:Int
}
input UserInput{
  firstName: String!
  lastName: String!
  age: Int!
}
type Mutation{
  createTask(input:TaskInput):Task
  createUser(input:UserInput):User
  updateUser(_id:ID,input:UserInput):User
  deleteUser(_id:ID):User
}
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
