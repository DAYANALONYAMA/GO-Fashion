
import { useQuery } from "@apollo/client";
import { FILTER_PRODUCT_BY_TYPE_QUERY } from "../graphql/product/filter-product-by-type";

export const useGraphQLFetch = (QUERY, VARIABLES = {}) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: VARIABLES
  });
  return { data, loading, error };
};


export const useFetchShop = ({ variables }) => {
  const { data, loading, error } = useGraphQLFetch(
    FILTER_PRODUCT_BY_TYPE_QUERY,
    {
      variables,
    }
  );
}