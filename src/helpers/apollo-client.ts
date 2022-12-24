import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.hashnode.com/",
  // headers: {
  //   Authorization: `Bearer: ${process.env.RANDOM_HASH as string}`,
  //   "Content-Type": "application/json",
  // },
  cache: new InMemoryCache(),
});

export default client;
