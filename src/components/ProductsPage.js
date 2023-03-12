import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import BreadCrumb from "./product/BreadCrumb";
import ProductDetails from "./product/ProductDetails";
import Comments from "./product/Comments";
import Loading from "./shared/Loading";

//Images
import jordan1 from '../assets/img/jordan1.png'
import jordan2 from '../assets/img/jordan2.png'
import jordan3 from '../assets/img/jordan3.png'
import jordan4 from '../assets/img/jordan4.png'
import jordan5 from '../assets/img/jordan5.png'
import jordan6 from '../assets/img/jordan6.png'

const ProductsPage = () => {

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

const idSTR = useParams().id;
const idNum = Number(idSTR)

const prod = ourList.filter(product => product.id == idNum)
console.log(prod)

  return prod[0] ? (
    <div className="products-page">
      <div className="container">
        <BreadCrumb
          type={prod[0].type}
          category={prod[0].category}
          title={prod[0].title}
        />
        <ProductDetails data={prod[0]} />
        <Comments />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ProductsPage;
