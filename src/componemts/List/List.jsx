import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const data = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dhm9nicld/image/upload/v1681151577/robe-enfant-fille-a-festons_pma9fg.jpg",
      img2: "https://res.cloudinary.com/dhm9nicld/image/upload/v1681151172/monnalisa-robe-capri-en-coton_wlzype.jpg",
      title: "Robe petite fille",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dhm9nicld/image/upload/v1681151172/monnalisa-robe-capri-en-coton_wlzype.jpg",
      img2: "https://res.cloudinary.com/dhm9nicld/image/upload/v1681151577/robe-enfant-fille-a-festons_pma9fg.jpg",
      title: "T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dhm9nicld/image/upload/v1681151554/4336701D_ujk4mx.webp",
      img2: "https://res.cloudinary.com/dhm9nicld/image/upload/v1681151577/robe-enfant-fille-a-festons_pma9fg.jpg",
      title: "T-shirt",
      isNew: false,
      oldPrice: 19,
      price: 40,
    },

    {
      id: 4,
      img: "https://res.cloudinary.com/dhm9nicld/image/upload/v1681151392/t%C3%A9l%C3%A9chargement_2_ys871o.jpg",
      img2: "https://res.cloudinary.com/dhm9nicld/image/upload/v1681151529/61K_9L90gzL._AC_UL320__aiyjuw.jpg",
      title: "T-shirt",
      isNew: false,
      oldPrice: 19,
      price: 50,
    },
  ];

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );

  return (
    <div className="list">
      {/* {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))} */}
    </div>
  );
};

export default List;
