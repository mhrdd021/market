import React, { useState } from "react";

//Styles
import styles from "./ShopFilter.module.css";

//icons
import search from "../../assets/img/search.svg";

const ShopFilter = ({ filtered, filterHandler }) => {
  const [filterMenu, setFilterMenu] = useState(false);

  const filterMenuHandler = () => {
    setFilterMenu(!filterMenu);
  };

  return (
    <>
      <div className={filterMenu ? styles.filterOpen : styles.filter}>
        <div className={styles.field}>
          <h4>جستجو در محصولات</h4>
          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.search}
              name="search"
              placeholder="نام محصول مورد نظر"
              value={filtered.search}
              onChange={filterHandler}
            />
            <img src={search} alt="search" className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.field}>
          <h4>دسته بندی محصولات</h4>
          <div className={styles.category}>
            <ul>
              <li id="category مردانه" onClick={filterHandler}>
                مردانه
              </li>
              <li id="category زنانه" onClick={filterHandler}>
                زنانه
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.field}>
          <h4>قیمت</h4>
          <div className={styles.priceBox}>
            <small className={styles.pricerange}>حداقل قیمت</small>
            <input
              type="number"
              name="fromPrice"
              onChange={filterHandler}
            />
            <small className={styles.unitPrice}>تومان</small>
          </div>
          <div className={styles.priceBox}>
            <small className={styles.pricerange}>حداکثر قیمت</small>
            <input
              type="number"
              name="toPrice"
              onChange={filterHandler}
            />
            <small className={styles.unitPrice}>تومان</small>
          </div>
        </div>
      </div>
      <div className={styles.buttonFilter} onClick={filterMenuHandler}>
        <div>
          فیلتر
          <i className="fas fa-filter"></i>
        </div>
      </div>
    </>
  );
};

export default ShopFilter;
