import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Styles
import styles from "./Shop.module.css";


//Loading
import Loading from "./shared/Loading";

//Components
import ProductCard from "./shared/ProductCard";
import BreadCrumbShop from "./shop/BreadCrumbShop";
import ShopFilter from "./shop/ShopFilter";

//Images
import jordan1 from '../assets/img/jordan1.png'
import jordan2 from '../assets/img/jordan2.png'
import jordan3 from '../assets/img/jordan3.png'
import jordan4 from '../assets/img/jordan4.png'
import jordan5 from '../assets/img/jordan5.png'
import jordan6 from '../assets/img/jordan6.png'

const Shop = () => {
  const categoryParams = useParams().category;

  
  const [filtered, setFiltered] = useState({
    sortBy: "date",
    search: "",
    category: categoryParams ? categoryParams : "",
    fromPrice: 0,
    toPrice: 999999999,
  });

  let newProducts = [
    {
    id: 20 ,
    title: "Air Jordan 1 red" ,
    date: 20231003 ,
    type: "کفش" ,
    sells:120 ,
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
      sells:60 ,
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
      sells:96 ,
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
      sells:88 ,
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
      sells:50 ,
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
      sells:94 ,
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

  //Filters function
  const shopFilterProducts = (state) => {
    if (state.sortBy === "date") {
      newProducts = newProducts.sort(
        (a, b) => parseFloat(b.date) - parseFloat(a.date)
      );
    }
    if (state.sortBy === "price") {
      newProducts = newProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    }
    if (state.sortBy === "sells") {
      newProducts = newProducts.sort(
        (a, b) => parseFloat(b.sells) - parseFloat(a.sells)
      );
    }
    if (state.search.length) {
      newProducts = newProducts.filter((product) =>
        product.title.includes(state.search)
      );
    }
    if (state.category.length) {
      newProducts = newProducts.filter(
        (product) => product.category === state.category
      );
    }
    if (state.fromPrice.length || state.toPrice.length) {
      newProducts = newProducts.filter(
        (product) =>
          product.price >= state.fromPrice && product.price <= state.toPrice
      );
    }
  };

  shopFilterProducts(filtered);

  const filterHandler = (event) => {
    if (
      event.target.name === "search" ||
      event.target.name === "fromPrice" ||
      event.target.name === "toPrice"
    ) {
      setFiltered({ ...filtered, [event.target.name]: event.target.value });
    } else {
      setFiltered({
        ...filtered,
        [event.target.id.split(" ")[0]]: event.target.id.split(" ")[1],
      });
    }
  };

  return (
    <div className="container">
      <BreadCrumbShop filtered={filtered} filterHandler={filterHandler} />
      <div className={styles.shopPage}>
        <aside className={styles.filterContainer}>
          <div className={styles.fiter}>
            <ShopFilter filtered={filtered} filterHandler={filterHandler} />
          </div>
        </aside>
        <main className={styles.mainContainer}>
          <div className={newProducts.length > 0 ? styles.products : ""}>
            {newProducts.length > 0 ? (
              newProducts.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
