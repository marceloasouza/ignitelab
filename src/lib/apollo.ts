import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oaqx0e1nou01xxctw43po8/master',
  cache: new InMemoryCache()
})