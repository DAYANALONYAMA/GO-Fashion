import react from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="img">
        <img
          src="https://res.cloudinary.com/dhm9nicld/image/upload/v1681477156/burgess-milner-OYYE4g-I5ZQ-unsplash_i4btmy.jpg"
          alt=""
          style={{ width: "100%", height: "60%" }}
        />
      </div>
      {/* <div className="paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, cum!
          Doloribus possimus consectetur obcaecati ipsa rem minus, nemo repellat
          voluptates eveniet eius quo, id tenetur, nisi minima nulla beatae
          pariatur.
        </p>
      </div> */}
    </div>
  );
};

export default About;
