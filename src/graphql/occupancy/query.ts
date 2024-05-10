import { gql } from "@apollo/client";

export const getOccupancy = gql`
  query getOccupancy {
    occupancy(where: { date: { _gte: "2024-1-1" } }, order_by: { date: asc }) {
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

export const getOccupancyByDay = gql`
  query getOccupancyByDay($start: timestamp!, $end: timestamp!) {
    occupancy(
      where: { date: { _gte: $start, _lte: $end } }
      order_by: { date: asc }
    ) {
      current
      date
      id
      libary_id
      total
    }
  }
`;
