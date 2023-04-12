import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link className="link">
            <span>Femme</span>
          </Link>

          <Link className="link">
            <span>Homme</span>
          </Link>

          <Link className="link">
            <span>Chaussure</span>
          </Link>

          <Link className="link">
            <span>Accessoires</span>
          </Link>

          <Link className="link">
            <span>Arrivage</span>
          </Link>
        </div>
        <div className="item">
          <h1>Infos</h1>
          <span>Carte fidelité</span>
          <span>Service Client</span>
          <span>Trouver une boutique</span>
        </div>
        {/* <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div> */}
        <div className="item">
          <h1>Contact</h1>
          <span>Phone:+243 00000</span>
          <span>Email:gofashion@gmail.com</span>
          <span>Adress: 115,Avenue Colonel Ebeya,Gombe</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src="https://res.cloudinary.com/dhm9nicld/image/upload/v1681156327/t%C3%A9l%C3%A9chargement_omttx4.png"
            alt=""
            style={{ width: "160px" }}
          ></img>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
