// import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate?filters[type][$eq]=${type}`
  );
  console.log(data);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quidem
          ad soluta culpa esse corrupti dolores corporis quas in earum incidunt,
          omnis quia rem aspernatur veritatis, ullam nemo ipsa delectus?{" "}
        </p>
      </div>
      <div className="bottom">
        {error
          ? "loading"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
