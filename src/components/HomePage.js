import React from "react";

//Components
import Slider from "./home/Slider";
import SpecialOffers from "./home/SpecialOffers";
import LatestProducts from "./home/LatestProducts";
import BestSellingProducts from "./home/BestSellingProducts";
import OurBrands from "./home/OurBrands";
import ImagesBox from "./home/ImagesBox";
import BlogsCard from "./home/BlogsCard";

const HomePage = () => {
  return (
    <div className="container">
      <Slider />
      <SpecialOffers />
      <OurBrands />
      <ImagesBox />
      <BlogsCard />
    </div>
  );
};

export default HomePage;
