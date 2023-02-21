"use client";

import { PROPERTY_API } from "services/api";

import { getAuthTokenFromCookies } from "utils";

import useSWR from "swr";

const fetchProperties = async (userToken: string) => {
  try {
    const data = await PROPERTY_API.getAllProperties(userToken);
    return data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

export function useFetchProperties() {
  const userToken: any = getAuthTokenFromCookies();

  const { data, mutate, error } = useSWR("/properties", () =>
    fetchProperties(userToken)
  );

  return { data, mutate, error };
}
