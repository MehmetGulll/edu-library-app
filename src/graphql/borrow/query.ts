import { gql } from '@apollo/client';

export const getBorrow = gql`
  query getBorrow {
    borrow {
      category
      date
    }
  }
`;
