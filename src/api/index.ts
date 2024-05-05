import {
  GetBorrowDocument,
  GetBorrowQuery,
  InsertOccupancyDocument,
  Occupancy_Insert_Input,
} from "@/generated/graphql";
import { client } from "../../utils/apolloClient";

export const getBorrow = async () => {
  const { data } = await client.query<GetBorrowQuery>({
    query: GetBorrowDocument,
  });

  return data;
};

export const insertOccupancy = async (occupancy: Occupancy_Insert_Input) => {
  const { data } = await client.mutate({
    mutation: InsertOccupancyDocument,
    variables: {
      occupancy,
    },
  });

  return data;
};
