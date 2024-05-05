import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { getOccupancy,DateFormat } from './getOccupancy';
import { gql } from '@apollo/client';

export const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.HASURA_CLIENT_URI || '',
    headers: {
      'x-hasura-admin-secret': process.env.X_HASURA_SECRET_ADMIN || '',
    },
  }),
  cache: new InMemoryCache(),
  ssrMode: true,
});

export const fetchAndSaveData = async () => {
  const date = new Date().toLocaleDateString("tr-TR");
  const occupancy = await getOccupancy(date as DateFormat);

  // GraphQL Mutation
  const INSERT_OCCUPANCY = gql`
    mutation InsertOccupancy($date: date!, $occupancy: jsonb!) {
      insert_occupancy_one(object: {date: $date, occupancy: $occupancy}) {
        date
      }
    }
  `;

  // Insert Data into Hasura
  await client.mutate({
    mutation: INSERT_OCCUPANCY,
    variables: {
      date,
      occupancy,
    },
  });
};