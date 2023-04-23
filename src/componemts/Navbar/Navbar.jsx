import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [open, setOpen] = useState(false);

  function handleOpenMenu() {
    document.body.classList.add("ActiveMenu");
  }

  function handCloseMenu() {
    document.body.classList.remove("ActiveMenu");
  }

  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <Link className="logo" to="/">
            <img
              src="https://res.cloudinary.com/dhm9nicld/image/upload/v1681156327/t%C3%A9l%C3%A9chargement_omttx4.png"
              alt=""
              className="img"
            ></img>
          </Link>

          <DensityMediumIcon className="Toggle" onClick={handleOpenMenu} />

          <div className="left">
            <div className="item">
              <Link className="link" to="/">
                Accueil
              </Link>
            </div>

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
            <div className="item">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="right">
            <div className="icons">
              {/* <SearchIcon /> */}
              {/* <PersonOutlineOutlinedIcon />
              <FavoriteBorderOutlinedIcon /> */}
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span></span>
              </div>
            </div>
          </div>

          <div className="filter">
            <CloseIcon className="iconClose" onClick={handCloseMenu} />
          </div>
        </div>
        {open && <Cart />}
      </div>
    </>
  );
};

export default Navbar;
