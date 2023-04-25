// import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

import { CustomSkeleton } from "../custom-skeleton/CustomSkeleton";
import { useEffect } from "react";

const FeaturedProducts = ({ productsFiltered, type,error , loading}) => {
  
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
        {error ? (
          "Oups! une erreur est survenue"
        ) : loading ? (
          <CustomSkeleton type="wave" />
        ) : (
          productsFiltered.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
