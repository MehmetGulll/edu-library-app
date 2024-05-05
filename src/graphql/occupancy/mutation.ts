import { gql } from "@apollo/client";

export const insertOccupancy = gql`
  mutation InsertOccupancy($occupancy: occupancy_insert_input!!) {
    insert_occupancy_one(object: $occupancy) {
      date
    }
  }
`;
