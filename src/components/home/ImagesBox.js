import React from 'react';

//Images
import image1 from "../../assets/img/basketball1.jpg";
import image2 from "../../assets/img/basketball2.jpg";
import image3 from "../../assets/img/basketball3.jpg";
import image4 from "../../assets/img/basketball4.jpg";

//Styles
import styles from "./ImagesBox.module.css";

const ImagesBox = () => {
    return (
        <div className={styles.imagesBox}>
            <div className={styles.box}>
                <img src={image1} alt="imagebox" />
            </div>
            <div className={styles.box}>
                <img src={image2} alt="imagebox" />
            </div>
            <div className={styles.box}>
                <img src={image3} alt="imagebox" />
            </div>
            <div className={styles.box}>
                <img src={image4} alt="imagebox" />
            </div>
        </div>
    );
};

export default ImagesBox;