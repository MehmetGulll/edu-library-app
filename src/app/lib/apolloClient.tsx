import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
    return new ApolloClient({
      uri: process.env.HASURA_CLIENT_URI,
      cache: new InMemoryCache(),
      headers: {
        'x-hasura-access-key': process.env.X_HASURA_SECRET_ADMIN!,
      },
    });
  };
  
export default createApolloClient;
