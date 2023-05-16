import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addId,
  addProducts,
  filterProductBySubCategories,
} from "../../store/productReducer";
import "./Products.scss";
import { FILTER_PRODUCT_BY_TYPE_QUERY } from "../../graphql/product/filter-product-by-type";
import { useGraphQLFetch } from "../../hooks/useGraphQLFetch";
import { parseProductResult } from "../../utils/parserResult/productResults";
import { Checkbox, Container, Divider, Slider } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductList from "../../componemts/Products/ProductList";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import CloseIcon from "@mui/icons-material/Close";
import { useColor } from "../../hooks/useColor";

const Products = () => {
  let { categoryTitle } = useParams();
  const { products } = useSelector((state) => state.product);
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [category, setCategory] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

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
    const arr = new Set();
    arr.add(item)
     setSelectedSubCats((prev)=> [...prev,...arr]);
     
  };

  useEffect(()=>{
    dispatch(filterProductBySubCategories(selectedSubCats));
  },[selectedSubCats])
  useEffect(() => {
    setCategory(categoryTitle);
    dispatch(addProducts(productResults()));
    // setSelectedSubCats([]);
  }, [category, categoryTitle, dispatch, productResults]);

  function handleOpenFilter() {
    document.body.classList.add("ActFiltre");
  }

  function handCloseMenu() {
    document.body.classList.remove("ActFiltre");
  }

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const isChecked = e.target.checked;

  //   setSelectedSubCats(
  //     isChecked
  //       ? [...selectedSubCats, value]
  //       : selectedSubCats.filter((item) => item !== value)
  //   );
  // };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="products">
      <div className="left-filter">
        <div className="filterItem">
          { JSON.stringify(selectedSubCats)}
          <h2>Categories</h2>
          {products?.map((item) =>
            item.sub_categories.map((cat) => (
              <div className="inputItem" key={item.id}>
                 <Checkbox {...label} onChange={() => handleChange(cat)}/>
                {/* <input
                  type="checkbox"
                  id={cat?.id}
                  valueIndex={cat?.id}
                  // onChange={() => {
                  //   handleChange(cat);
                  // }} 
                  onChange={() => handleChange(cat)}
                />
                */}
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
        <Divider light />
        <div className="filterItem">
          <h2>Filtrer par prix</h2>
          <div className="inputItem">
            <span>0</span>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={(e) => setMaxPrice(e)}
              color='primary'
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <Divider light />
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

      <div className="right">
        <img
          className="catImg"
          src="https://res.cloudinary.com/dhm9nicld/image/upload/v1668414926/samples/ecommerce/accessories-bag.jpg"
          alt=""
        />
        <div className="filter-mobil">
          <span>Filtrer</span>
          <AlignHorizontalCenterIcon
            onClick={handleOpenFilter}
            className="icoFil"
          />
        </div>

        <div className="Closemobile">
          <CloseIcon className="iconClose" onClick={handCloseMenu} />
        </div>

        <ProductList
          catId={dispatch(addId)}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
