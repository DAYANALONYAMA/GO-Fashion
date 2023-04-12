import React from "react";
import "./Cart.scss";

const Cart = () => {
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
  ];

  return (
    <div className="cart">
      <h1>Mon pannier</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title} </h1>
            <p>{item.desc.substring(0, 100)} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
