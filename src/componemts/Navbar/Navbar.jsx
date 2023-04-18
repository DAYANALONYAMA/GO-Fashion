import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import About from "../../pages/About/About";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Femme
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Homme
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Enfant
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Boutique
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            <img
              src="https://res.cloudinary.com/dhm9nicld/image/upload/v1681156327/t%C3%A9l%C3%A9chargement_omttx4.png"
              alt=""
              style={{ width: "160px" }}
            ></img>
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Accueil
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/à propos">
              À propos
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
