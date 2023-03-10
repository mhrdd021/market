import React from "react";

//Images
import shop from "../../assets/img/shop.svg";
import time from "../../assets/img/time.svg";
import delivery from "../../assets/img/delivery.svg";

//Components
import Services from "../shared/Services";

//Styles
import styles from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className="container">
      <div className={styles.ourServices}>
        <Services
          title="ارسال رایگان"
          subtitle="برای سفارش های بالای 400 هزار تومان"
          image={delivery}
        />
        <Services
          title="پشتیبانی"
          subtitle="هر روز هفته 24 ساعت شبانه روز"
          image={time}
        />
        <Services
          title="تنوع محصولات"
          subtitle="بیش از 2500 کالای موجود "
          image={shop}
        />
      </div>
    </div>
  );
};

export default OurServices;
