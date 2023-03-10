import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CartContextProvider } from "../context/CartContext";

//Styles
import styles from "./Navbar.module.css";

//Icons
import logo from "../assets/img/Group 27.png";
import searchIcon from "../assets/img/search.svg";
import shopIcon from "../assets/img/shopping-bag.svg";
import cross from "../assets/img/cross.svg";
import hamburger from "../assets/img/menu-burger.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { state } = useContext(CartContextProvider);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topheader}>
          <div
            className={menu ? styles.hamburgerOpen : styles.hamburger}
            onClick={() => setMenu(!menu)}
          >
            <img src={menu ? cross : hamburger} alt="hamburger" />
          </div>
          <div className={styles.logo}>
            <h2 className="text-2xl font-bold">REACT JS <span className="text-red-600 text-sm">mhrdd</span></h2>
          </div>
          <div className={styles.search}>
            <input type="search" placeholder="جستجو..." />
            <button>
              <img src={searchIcon} alt="search" />
            </button>
          </div>
          <div className={styles.buttons}>
            <Link to="/signup">ورود | ثبت نام </Link>
            <Link to="/cart" className={styles.cart}>
              سبد خرید
              <img src={shopIcon} alt="shop" />
              {state.itemCounter > 0 && (
                <span className={styles.itemCounter}>{state.itemCounter}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.container}>
        <div className={styles.bottomheader}>
          <ul className={menu ? styles.navbaropen : styles.navbar}>
            <li className={styles.navitem}>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className={styles.navitem}>
              <Link to="/shop">فروشگاه</Link>
            </li>
            <li className={styles.navitem}>
              <Link to="/blogs">مقالات</Link>
            </li>
            <li className={styles.navitem}>
              <Link to="/aboutus">درباره ما</Link>
            </li>
            <li className={styles.navitem}>
              <Link to="/contactus">تماس با ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
