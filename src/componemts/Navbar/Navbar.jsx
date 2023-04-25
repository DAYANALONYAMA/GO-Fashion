import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authReducer";
import AccountMenu from "./DropdownMenu";

const Navbar = () => {
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [open, setOpen] = useState(false);
  const [womenCategoryTitle, setWomenCategoryTitle] = useState("femme");
  const [manCategoryTitle, setManCategoryTitle] = useState("homme");
  const [childCategoryTitle, setChildCategoryTitle] = useState("enfant");
  const { user, isAuthenticated } = useSelector((state) => state.auth);
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
              <Link className="link" to={`/products/${womenCategoryTitle}`}>
                Femme
              </Link>
            </div>
            <div className="item">
              <Link className="link" to={`/products/${manCategoryTitle}`}>
                Homme
              </Link>
            </div>
            <div className="item">
              <Link className="link" to={`/products/${childCategoryTitle}`}>
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
              <SearchIcon />
              {isAuthenticated ? (
              <AccountMenu/>
              ) : (
                <Link className="link" to="signin">
                  <PersonOutlineOutlinedIcon />
                </Link>
              )}

              <FavoriteBorderOutlinedIcon />
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
