import { gql } from "@apollo/client";

export const getOccupancy = gql`
  query getOccupancy($start: timestamptz!, $end: timestamptz!) {
    occupancy(where: { date: { _gte: $start, _lte: $end } }) {
      current
      date
      id
      libary_id
      total
    }
  }
`;
