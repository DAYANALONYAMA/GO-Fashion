import React, { useState } from "react";
import "./List.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const ProductList = ({ subCats, sort, maxPrice }) => {
  const { products } = useSelector((state) => state.product);
 

  return (
    <div className="list">
      {products?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default ProductList;
