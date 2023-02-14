import { PropertyApi } from "services/api/propertyApi";

import useSWR from "swr";

export function UseFetch() {
  const propertyRoutes = new PropertyApi();
  const { data, mutate, error } = useSWR("/api/files", () =>
    propertyRoutes.getAllProperties()
  );

  return { data, mutate, error };
}
