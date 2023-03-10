import React from "react";

//Brands icon
import adidas from "../../assets/img/adidas.svg";
import nike from "../../assets/img/nike.svg";
import puma from "../../assets/img/puma.svg";
import zara from "../../assets/img/zara.svg";

//Styles
import styles from "./OurBrands.module.css";

const OurBrands = () => {
  return (
    <div className="carousel-slider">
      <div className="title-homepage">
        <h2>برند های ما</h2>
        <small>Our brands</small>
      </div>
      <div className={styles.brands}>
          <div className={styles.image}><img className="mx-auto" src={adidas} alt="brands" /></div>
          <div className={styles.image}><img className="mx-auto" src={zara} alt="brands" /></div>
          <div className={styles.image}><img className="mx-auto" src={puma} alt="brands" /></div>
          <div className={styles.image}><img className="mx-auto" src={nike} alt="brands" /></div>
      </div>
    </div>
  );
};

export default OurBrands;
