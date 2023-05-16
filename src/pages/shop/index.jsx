import { Container, Box, Grid } from "@mui/material";
import React from "react";
import Card from "../../componemts/Card/Card";
import { useGraphQLFetch } from "../../hooks/useGraphQLFetch";
import { FILTER_PRODUCT_BY_TYPE_QUERY } from "../../graphql/product/filter-product-by-type";
import { useDispatch } from "react-redux";
import { parseProductResult } from "../../utils/parserResult/productResults";
import { CustomSkeleton } from "../../componemts/Shared/custom-skeleton/CustomSkeleton";

const Shop = () => {
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
    // dispatch(addProducts(products));
    return products;
  };

  const renderCard = () => {
    return productResults()?.map((product, index) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card item={product} />
        </Grid>
      );
    });
  };
  return (
    <Container style={{ paddingTop: "10rem" }} fluid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          Filtrer produit
        </Grid>
        {loading ? (
          <Grid container spacing={1}>
            {productResults()?.map(index =>(
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ height:'400px'}}>
              <CustomSkeleton isLoading={loading} />
            </Grid>
            ))}
          </Grid>
        ) : (
          <Grid item xs={12} sm={6} md={9}>
            <Grid container spacing={3}>
              {renderCard()}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Shop;
