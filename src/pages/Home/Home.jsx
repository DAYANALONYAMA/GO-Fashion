import React from "react";
import Card from "../../componemts/Card/Card";
import Categories from "../../componemts/Categories/Categories";
import Contact from "../../componemts/Contact/Contact";
import FeaturedProducts from "../../componemts/FeatureProducts/FeaturedProducts";
import Slider from "../../componemts/slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Nouvelle Collection" />
      <Categories />
      <FeaturedProducts type="Promotion" />
      <Contact />
    </div>
  );
};

export default Home;
