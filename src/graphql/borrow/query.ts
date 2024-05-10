import { gql } from "@apollo/client";

export const getBorrow = gql`
  query getBorrow {
    borrow(where: { date: { _gte: "2023-12-31" } }, order_by: { date: asc }) {
      category
      date
    }
  }
`;

export const getBorrowByDay = gql`
  query getBorrowByDay($date: date!) {
    borrow(
      where: { date: { _gte: $date, _lte: $date } }
      order_by: { date: asc }
    ) {
      author
      category
      date
      id
      language
      name
      shelf_number
    }
  }
`;
