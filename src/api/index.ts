import {
  GetBorrowByDayDocument,
  GetBorrowByDayQuery,
  GetBorrowDocument,
  GetBorrowQuery,
  GetLastOccupancyDocument,
  GetLastOccupancyQuery,
  GetOccupancyByDayDocument,
  GetOccupancyByDayQuery,
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

export const getBorrowByDay = async (date: string) => {
  const { data } = await client.query<GetBorrowByDayQuery>({
    query: GetBorrowByDayDocument,
    variables: {
      date,
    },
  });

  return data;
};

export const insertOccupancy = async (occupancy: Occupancy_Insert_Input) => {
  console.info("inserting");
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

export const getAllOccupancy = async () => {
  const { data } = await client.query<GetOccupancyQuery>({
    query: GetOccupancyDocument,
  });

  return data;
};

export const getOccupancyByDay = async (date: string) => {
  const today = new Date(date);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const isDateToday = today.toDateString() === new Date().toDateString();

  const { data } = await client.query<GetOccupancyByDayQuery>({
    query: GetOccupancyByDayDocument,
    variables: {
      // date minus one day
      start: today,
      end: tomorrow.toISOString(),
    },
    fetchPolicy: isDateToday ? "network-only" : "cache-first",
  });

  return data;
};
