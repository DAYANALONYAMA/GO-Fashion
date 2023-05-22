import { Container, Box, Grid } from "@mui/material";
import React from "react";
import Card from "../../componemts/Card/Card";
import { useGraphQLFetch } from "../../hooks/useGraphQLFetch";
import { FILTER_PRODUCT_BY_TYPE_QUERY } from "../../graphql/product/filter-product-by-type";
import { useDispatch, useSelector } from "react-redux";
import { parseProductResult } from "../../utils/parserResult/productResults";
import { CustomSkeleton } from "../../componemts/Shared/custom-skeleton/CustomSkeleton";
import { useState, useEffect } from "react";
import { Checkbox, Divider, Slider } from "@mui/material";
import {
  addId,
  addProducts,
  filterProductBySubCategories,
} from "../../store/productReducer";

const Shop = () => {
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [category, setCategory] = useState("");
  const { products } = useSelector((state) => state.product);
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

  const handleChange = (item) => {
    const arr = new Set();
    arr.add(item);
    setSelectedSubCats((prev) => [...prev, ...arr]);
  };

  useEffect(() => {
    dispatch(filterProductBySubCategories(selectedSubCats));
  }, [selectedSubCats]);
  useEffect(() => {
    setCategory();
    dispatch(addProducts(productResults()));
    // setSelectedSubCats([]);
  }, [dispatch, productResults]);

  const renderCard = () => {
    return productResults()?.map((product, index) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card item={product} />
        </Grid>
      );
    });
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="products">
      <div className="left-filter">
        <div className="filterItem">
          {JSON.stringify(selectedSubCats)}
          <h2>Categories</h2>
          {products?.map((item) =>
            item.sub_categories.map((cat) => (
              <div className="inputItem" key={item.id}>
                <Checkbox {...label} onChange={() => handleChange(cat)} />

                <label htmlFor={cat?.id}>{cat.title}</label>
              </div>
            ))
          )}
        </div>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}></Grid>
        {loading ? (
          <Grid container spacing={1}>
            {productResults()?.map((index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                style={{ height: "400px" }}
              >
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
    </div>
  );

  // Logique 1

  // // const { products } = useSelector((state) => state.product);
  // const [checked, setChecked] = React.useState(false);
  // const dispatch = useDispatch();
  // const [maxPrice, setMaxPrice] = useState(1000);
  // const [sort, setSort] = useState(null);
  // const [category, setCategory] = useState("");
  // const [selectedSubCats, setSelectedSubCats] = useState([]);

  // const { data, loading, error } = useGraphQLFetch(
  //   FILTER_PRODUCT_BY_TYPE_QUERY,
  //   {
  //     //  filters: { categories: { title: { eq: category } } },
  //   }
  // );

  // const productResults = () => {
  //   let products = data?.products?.data?.map((product) =>
  //     parseProductResult(product)
  //   );
  //   // dispatch(addProducts(products));
  //   return products;
  // };

  // // const handleChange = (item) => {
  // //   const arr = new Set();
  // //   arr.add(item);
  // //   setSelectedSubCats((prev) => [...prev, ...arr]);
  // // };

  // // useEffect(() => {
  // //   dispatch(filterProductBySubCategories(selectedSubCats));
  // // }, [selectedSubCats]);
  // // useEffect(() => {
  // //   setCategory(categoryTitle);
  // //   dispatch(addProducts(productResults()));
  // //   // setSelectedSubCats([]);
  // // }, [category, categoryTitle, dispatch, productResults]);

  // function handleOpenFilter() {
  //   document.body.classList.add("ActFiltre");
  // }

  // function handCloseMenu() {
  //   document.body.classList.remove("ActFiltre");
  // }

  // // const handleChange = (e) => {
  // //   const value = e.target.value;
  // //   const isChecked = e.target.checked;

  // //   setSelectedSubCats(
  // //     isChecked
  // //       ? [...selectedSubCats, value]
  // //       : selectedSubCats.filter((item) => item !== value)
  // //   );
  // // };
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // return (
  //   <div className="products">
  //     <div className="left-filter">
  //       <div className="filterItem">
  //         {JSON.stringify(selectedSubCats)}
  //         <h2>Categories</h2>
  //         {products?.map((item) =>
  //           item.sub_categories.map((cat) => (
  //             <div className="inputItem" key={item.id}>
  //               <Checkbox {...label} onChange={() => handleChange(cat)} />

  //               <label htmlFor={cat?.id}>{cat.title}</label>
  //             </div>
  //           ))
  //         )}
  //       </div>
  //       <Divider light />
  //       <div className="filterItem">
  //         <h2>Filtrer par prix</h2>
  //         <div className="inputItem">
  //           <span>0</span>
  //           <Slider
  //             aria-label="Temperature"
  //             defaultValue={30}
  //             getAriaValueText={(e) => setMaxPrice(e)}
  //             color="primary"
  //           />
  //           <span>{maxPrice}</span>
  //         </div>
  //       </div>
  //       <Divider light />
  //       <div className="filterItem">
  //         <h2>Sort by</h2>
  //         <div className="inputItem">
  //           <input
  //             type="radio"
  //             id="asc"
  //             valueIndex="asc"
  //             name="price"
  //             onChange={(item) => setSort("asc")}
  //           />
  //           <label htmlFor="asc">Price (Lowest first)</label>
  //         </div>
  //         <div className="inputItem">
  //           <input
  //             type="radio"
  //             id="desc"
  //             valueIndex="desc"
  //             name="price"
  //             onChange={(item) => setSort("desc")}
  //           />
  //           <label htmlFor="desc">Price (Highest first)</label>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="right">
  //       <img
  //         className="catImg"
  //         src="https://res.cloudinary.com/dhm9nicld/image/upload/v1668414926/samples/ecommerce/accessories-bag.jpg"
  //         alt=""
  //       />
  //       <div className="filter-mobil">
  //         <span>Filtrer</span>
  //         <AlignHorizontalCenterIcon
  //           onClick={handleOpenFilter}
  //           className="icoFil"
  //         />
  //       </div>

  //       <div className="Closemobile">
  //         <CloseIcon className="iconClose" onClick={handCloseMenu} />
  //       </div>

  //       {loading ? (
  //         <Grid container spacing={1}>
  //           {productResults()?.map((index) => (
  //             <Grid
  //               item
  //               xs={12}
  //               sm={6}
  //               md={4}
  //               lg={3}
  //               key={index}
  //               style={{ height: "400px" }}
  //             >
  //               <CustomSkeleton isLoading={loading} />
  //             </Grid>
  //           ))}
  //         </Grid>
  //       ) : (
  //         <Grid item xs={12} sm={6} md={9}>
  //           <Grid container spacing={3}>
  //             {renderCard()}
  //           </Grid>
  //         </Grid>
  //       )}

  //       {/* <ProductList
  //         catId={dispatch(addId)}
  //         maxPrice={maxPrice}
  //         sort={sort}
  //         subCats={selectedSubCats}
  //       /> */}
  //     </div>
  //   </div>
  // );
};

export default Shop;
