import React, { useEffect, useState } from "react";
import Categories from "../../componemts/Categories/Categories";

import FeaturedProducts from "../../componemts/FeatureProducts/FeaturedProducts";
import Slider from "../../componemts/slider/Slider";
import { useGraphQLFetch } from "../../hooks/useGraphQLFetch";
import { FILTER_PRODUCT_BY_TYPE_QUERY } from "../../graphql/product/filter-product-by-type";
import { parseProductResult } from "../../utils/parserResult/productResults";
import { useDispatch } from "react-redux";
import { addProducts } from "../../store/productReducer";

const Home = () => {
  const [filters, setFilters] = useState({ type: "", isNew: null });
  const { data, loading, error } = useGraphQLFetch(
    FILTER_PRODUCT_BY_TYPE_QUERY
    // {
    //   variables: {
    //     filters: { type: { eq: filters.type }, isNew: { eq: filters.isNew } },
    //   },
    // }
  );
  const dispatch = useDispatch();
  const productResults = () => {
    let products = data?.products?.data?.map((product) =>
      parseProductResult(product)
    );
    dispatch(addProducts(products));
    return data?.products?.data?.map((product) => parseProductResult(product));
  };

  return (
    <div>
      <Slider />
      <FeaturedProducts
        productsFiltered={productResults()?.filter(
          (item) => item.isNew === true
        )}
        error={error}
        loading={loading}
        type={"Nouvelle Collection"}
      />
      <Categories />
      <FeaturedProducts
        productsFiltered={productResults()?.filter(
          (item) => item.isNew === false
        )}
        error={error}
        loading={loading}
        type={"Promotion"}
      />
    </div>
  );
};

export default Home;
