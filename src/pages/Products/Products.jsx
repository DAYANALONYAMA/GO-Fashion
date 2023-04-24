import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../componemts/List/List";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addId } from "../../store/idReducer";
import "./Products.scss";

const Products = () => {
  // const catId = parseInt(useParams().id);
  const dispatch = useDispatch();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    "/sub-categories"
    // `/sub-categories?[filters][id][$eq]=${dispatch(addId)}`
  );

  const handleChange = (item) => {
    dispatch(addId(item.id));
  };

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
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item?.id}
                valueIndex={item?.id}
                onChange={() => {
                  handleChange(item);
                }}
                // onChange={handleChange}
              />
              <label htmlFor={item?.id}>{item?.attributes?.title}</label>
            </div>
          ))}

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
      <div className="right">
        <img
          className="catImg"
          src="https://res.cloudinary.com/dhm9nicld/image/upload/v1668414926/samples/ecommerce/accessories-bag.jpg"
          alt=""
        />
        <List
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
