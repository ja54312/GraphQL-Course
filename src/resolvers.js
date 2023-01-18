export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world with graphql";
    },
    greet: (root, { name }) => {
      console.log(name);
      return `Hello ${name}`;
    },
  },
};
