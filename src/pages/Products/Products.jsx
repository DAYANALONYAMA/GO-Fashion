import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../componemts/List/ProductList";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addId, addProducts, filterProductBySubCategories } from "../../store/productReducer";
import "./Products.scss";
import { FILTER_PRODUCT_BY_TYPE_QUERY } from "../../graphql/product/filter-product-by-type";
import { useGraphQLFetch } from "../../hooks/useGraphQLFetch";
import { parseProductResult } from "../../utils/parserResult/productResults";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductList from "../../componemts/List/ProductList";

const Products = () => {
  let { categoryTitle } = useParams();
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [category, setCategory] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState({});

  const { data, loading, error } = useGraphQLFetch(
    FILTER_PRODUCT_BY_TYPE_QUERY,
    {
      filters: { categories: { title: { eq: category } } },
    }
  );

  const productResults = useCallback(() => {
    return data?.products?.data?.map((product) => parseProductResult(product));
  }, [data?.products?.data]);
  const handleChange = (item) => {
    setSelectedSubCats(item);
    dispatch(filterProductBySubCategories(item))
  };

  useEffect(() => {
    setCategory(categoryTitle);
    dispatch(addProducts(productResults()));
    setSelectedSubCats([]);
  }, [category, categoryTitle, dispatch, productResults]);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const isChecked = e.target.checked;

  //   setSelectedSubCats(
  //     isChecked
  //       ? [...selectedSubCats, value]
  //       : selectedSubCats.filter((item) => item !== value)
  //   );
  // };

  return (
    <Container className="products" sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5}>
        <Grid item xs={4}>
          <div className="left">
            <div className="filterItem">
              <h2>Categories</h2>
              {JSON.stringify(selectedSubCats)}
              {products?.map((item) =>
                item.sub_categories.map((cat) => (
                  <div className="inputItem" key={item.id}>
                    <input
                      type="checkbox"
                      id={cat?.id}
                      valueIndex={cat?.id}
                      // onChange={() => {
                      //   handleChange(cat);
                      // }}
                      onChange={() => handleChange(cat)}
                    />
                    <label htmlFor={cat?.id}>{cat.title}</label>
                  </div>
                ))
              )}

              {/* <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="1">T-shirt</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="1">Chemise</label>
          </div> */}
            </div>

            <div className="filterItem">
              <h2>Filter by price</h2>
              <div className="inputItem">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onChange={(item) => setMaxPrice(item.target.valueIndex)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filterItem">
              <h2>Sort by</h2>
              <div className="inputItem">
                <input
                  type="radio"
                  id="asc"
                  valueIndex="asc"
                  name="price"
                  onChange={(item) => setSort("asc")}
                />
                <label htmlFor="asc">Price (Lowest first)</label>
              </div>
              <div className="inputItem">
                <input
                  type="radio"
                  id="desc"
                  valueIndex="desc"
                  name="price"
                  onChange={(item) => setSort("desc")}
                />
                <label htmlFor="desc">Price (Highest first)</label>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="right">
            <img
              className="catImg"
              src="https://res.cloudinary.com/dhm9nicld/image/upload/v1668414926/samples/ecommerce/accessories-bag.jpg"
              alt=""
            />
            <ProductList
              catId={dispatch(addId)}
              maxPrice={maxPrice}
              sort={sort}
              subCats={selectedSubCats}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
