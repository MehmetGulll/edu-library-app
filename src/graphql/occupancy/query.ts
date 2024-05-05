import { gql } from "@apollo/client";

export const getOccupancy = gql`
  query getOccupancy($start: timestamp!, $end: timestamp!) {
    occupancy(where: { date: { _gte: $start, _lte: $end } }) {
      current
      date
      id
      libary_id
      total
    }
  }
`;

export const getLastOccupancy = gql`
  query getLastOccupancy {
    occupancy(limit: 1, order_by: { date: desc }) {
      current
      date
      id
      libary_id
      total
    }
  }
`;
