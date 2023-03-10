import React from 'react';

//Styles
import styles from "./Services.module.css";

const Services = ({image, title, subtitle}) => {
    return (
        <div className={styles.service}>
            <div className='w-8/12'>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
            <div className='w-4/12'>
                <img src={image} alt="services" />
            </div>
        </div>
    );
};

export default Services;