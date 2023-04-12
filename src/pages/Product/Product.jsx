import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://res.cloudinary.com/dhm9nicld/image/upload/v1668414921/samples/ecommerce/shoes.png ",
    "https://res.cloudinary.com/dhm9nicld/image/upload/v1668414925/samples/ecommerce/leather-bag-gray.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam
          temporibus eaque nulla. Rerum sed dolorem voluptatem distinctio ipsam
          molestias magni quisquam enim ipsum ipsa. Totam labore non itaque
          quisquam!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className="add">
          <AddShoppingCartIcon /> AJOUTER AU PANIER
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon />
          </div>
        </div>

        <div className="info">
          <span>Vendeur: go-fashion</span>
          <span>Catégorie: Chaussure</span>
          <span>Tag: Chaussure, Femme</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
