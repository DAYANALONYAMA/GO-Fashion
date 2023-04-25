
import { useQuery } from "@apollo/client";

export const useGraphQLFetch = (QUERY, VARIABLES = {}) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: VARIABLES
  });
  return { data, loading, error };
};

