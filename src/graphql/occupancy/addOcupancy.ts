import { gql } from "@apollo/client"

export const addOccupancy = gql`
  mutation addOccupancy($objects: [occupancy_insert_input!]!) {
    insert_occupancy(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`
