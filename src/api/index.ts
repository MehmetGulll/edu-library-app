import {
  GetBorrowDocument,
  GetBorrowQuery,
  GetLastOccupancyDocument,
  GetLastOccupancyQuery,
  GetOccupancyDocument,
  GetOccupancyQuery,
  InsertOccupancyDocument,
  InsertOccupancyMutation,
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
  console.log("inserting");
  try {
    const { data } = await client.mutate<InsertOccupancyMutation>({
      mutation: InsertOccupancyDocument,
      variables: {
        occupancy,
      },
      fetchPolicy: "no-cache",
    });

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getCurrentOccupancy = async () => {
  const { data } = await client.query<GetLastOccupancyQuery>({
    query: GetLastOccupancyDocument,
    fetchPolicy: "network-only",
  });

  return data;
};
