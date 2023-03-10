import React, { useContext } from "react";

//Swiper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Context
import { ProductsContext } from "../../context/ProductsContextProvider";

//Components
import ProductCard from "../shared/ProductCard";

//Images
import jordan1 from '../../assets/img/jordan1.png'
import jordan2 from '../../assets/img/jordan2.png'
import jordan3 from '../../assets/img/jordan3.png'
import jordan4 from '../../assets/img/jordan4.png'
import jordan5 from '../../assets/img/jordan5.png'
import jordan6 from '../../assets/img/jordan6.png'

const SpecialOffers = () => {
  const data = useContext(ProductsContext);
  const specialPro = data.filter((item) => item.discount > 0);

  const ourList = [
    {
    id: 20 ,
    title: "Air Jordan 1 red" ,
    date: 20231003 ,
    type: "کفش" ,
    sells:12 ,
    rate: 4 ,
    image: jordan1 ,
    price: 3800000 ,
    category: "مردانه" ,
    discount: 20 ,
    description: {
      madein : "usa",
      brand : "nike" ,
      gender : "کرپ حریر",
      size : [36, 37 ,38, 39 ,40],
      height : "high tops",
      used : "روز مره" ,
      plan : "طرح دار"
    }
    },
    {
      id: 21 ,
      title: "Air Jordan 1 blue" ,
      date: 20231003 ,
      type: "کفش" ,
      sells:12 ,
      rate: 5 ,
      image: jordan2 ,
      price: 4100000 ,
      category: "زنانه" ,
      discount: 50 ,
      description: {
        madein : "usa",
        brand : "nike" ,
        gender : "کرپ حریر",
        size : [36, 37 ,38, 39 ,40],
        height : "high tops",
        used : "روز مره" ,
        plan : "طرح دار"
        
      }
    },
    {
      id: 22 ,
      title: "Air Jordan 5 off-white" ,
      date: 20231003 ,
      type: "کفش" ,
      sells:12 ,
      rate: 4 ,
      image: jordan3 ,
      price: 4200000 ,
      category: "مردانه" ,
      discount: 14 ,
      description: {
        madein : "usa",
        brand : "nike" ,
        gender : "کرپ حریر",
        size : [36, 37 ,38, 39 ,40],
        height : "high tops",
        used : "روز مره" ,
        plan : "طرح دار"
        
      }
    },
    {
      id: 23 ,
      title: "Air Jordan 6 retro" ,
      date: 20231003 ,
      type: "کفش" ,
      sells:12 ,
      rate: 3 ,
      image: jordan4 ,
      price: 3900000 ,
      category: "مردانه" ,
      discount: 6 ,
      description: {
        madein : "usa",
        brand : "nike" ,
        gender : "کرپ حریر",
        size : [36, 37 ,38, 39 ,40],
        height : "high tops",
        used : "روز مره" ,
        plan : "طرح دار"
        
      }
    },
    {
      id: 24 ,
      title: "nike blazer" ,
      date: 20231003 ,
      type: "کفش" ,
      sells:12 ,
      rate: 4 ,
      image: jordan5 ,
      price: 6200000 ,
      category: "مردانه" ,
      discount: 0 ,
      description: {
        madein : "usa",
        brand : "nike" ,
        gender : "کرپ حریر",
        size : [36, 37 ,38, 39 ,40],
        height : "high tops",
        used : "روز مره" ,
        plan : "طرح دار"
        
      }
    },
    {
      id: 25 ,
      title: "Air Jordan 1 off-white" ,
      date: 20231003 ,
      type: "کفش" ,
      sells:12 ,
      rate: 5 ,
      image: jordan6 ,
      price: 4000000 ,
      category: "زنانه" ,
      discount: 0 ,
      description: {
        madein : "usa",
        brand : "nike" ,
        gender : "کرپ حریر",
        size : [36, 37 ,38, 39 ,40],
        height : "high tops",
        used : "روز مره" ,
        plan : "طرح دار"
        
      }
    }
]

  return (
    <div className="carousel-slider">
      <div className="title-homepage">
        <h2>پیشنهادات ویژه</h2>
        <small>Special offers</small>
      </div>
      <Swiper
        breakpoints={{
          990: {
            width: 990,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          360: {
            width: 350,
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        autoplay={true}
        loop={true}
        rtl={"true"}
      >
        {ourList.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
