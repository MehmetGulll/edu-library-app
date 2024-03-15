import { GetBorrowDocument, GetBorrowQuery } from '@/generated/graphql';
import { client } from '../../utils/apolloClient';

export const getProductsByCategory = async () => {
  const { data } = await client.query<GetBorrowQuery>({
    query: GetBorrowDocument,
  });

  return data;
};
