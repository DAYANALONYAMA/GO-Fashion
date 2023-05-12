import React from "react";
import "./Footer.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <div className="wrapper">
          <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="top">
        <div className="item">
          <span>
            115, Avenue Colonel Ebeya, Gombe <br /> +24300000 <br />
            gofashion@gmail.com{" "}
          </span>
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
