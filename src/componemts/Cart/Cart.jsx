import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../store/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../config/config";
import { Link } from "react-router-dom";
const Cart = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  // const totalPrice = () => {
  //   let total = 0;
  //   products.forEach((item) => (total += item.quantity * item.price));
  //   return total.toFixed(2);
  // };

  return (
    <div className="cart">
      <h1>Mon pannier</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title} </h1>
            <p>{item.desc?.substring(0, 100)} </p>
            <div className="price">
              {item.quantity}x ${item.price}{" "}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item))}
          />
        </div>
      ))}
      <div className="total">
        <span>Valeur de la commande</span>
        <span>{totalPrice}</span>
      </div>
      <Link className="link" to="signin">
        <button>Finaliser ma commande</button>
      </Link>
      <span className="reset" onClick={() => dispatch(resetCart(products))}>
        RESET Cart
      </span>
    </div>
  );
};

export default Cart;
