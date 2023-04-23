import React, { useState } from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const List = ({ subCats, sort, maxPrice }) => {
  const [filtered, setFiltered] = useState([]);
  const { products } = useSelector((state) => state.ids);
  const { data, loading, error } = useFetch(`/products?populate=*`);

  useEffect(() => {
    setFiltered(data);
    console.log(data);
  }, [data]);

  // useEffect(() => {
  //   console.log("products cat", subCats);
  // }, [subCats]);

  // const { data, loading, error } = useFetch(`/products?populate=*`);

  console.log("data", data);
  return (
    <div className="list">
      {loading
        ? "loading"
        : filtered?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
