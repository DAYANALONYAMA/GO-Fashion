import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        {/* <span>NOUS CONTACTER:</span>
        <div className="mail">
          <input type="text" placeholder="Votre adresse e-mail..." />
          <button>Send</button>
        </div> */}
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
