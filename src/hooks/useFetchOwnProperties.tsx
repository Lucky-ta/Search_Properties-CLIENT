import { getAuthTokenFromCookies, verifyToken } from "utils";
import useSWR from "swr";
import { PROPERTY_API } from "services/api";

const fetchOwnProperties = async (userToken: string) => {
  try {
    const decodedToken = verifyToken(userToken);
    const data = await PROPERTY_API.getOwnProperties(
      decodedToken.id,
      userToken
    );
    return data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

export function useFetchOwnProperties() {
  const userToken: any = getAuthTokenFromCookies();

  const { data, mutate, error } = useSWR("/properties/user", () =>
    fetchOwnProperties(userToken)
  );

  return { data, mutate, error };
}
