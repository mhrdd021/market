import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Cart.module.css";

//Components
import CartProducts from "./cart/CartProducts";
import CartPay from "./cart/CartPay";

//Context
import { CartContextProvider } from "../context/CartContext";

//Images
import cartEmpty from "../assets/img/empty-cart.svg";

const Cart = () => {
  const { state, dispatch } = useContext(CartContextProvider);
  return (
    <div className="container">
      <div className={styles.cartPage}>
        <div className={state.selectedItem.length ? styles.right : styles.center}>
          <div className={styles.CartProducts}>
            <div className={styles.header}>
              <h3>سبد خرید شما</h3>
              <h4>{state.itemCounter} کالا</h4>
            </div>
            {state.selectedItem.length ? (
              state.selectedItem.map((product) => (
                <CartProducts
                  key={product.id}
                  productData={product}
                  dispatch={dispatch}
                  state={state}
                />
              ))
            ) : (
              <div className={styles.empty}>
                <img src={cartEmpty} alt="trahs" className="mx-auto"/>
                <h3>سبد خرید شما خالی است.</h3>
                <Link to="/shop">فروشگاه </Link>
              </div>
            )}
          </div>
        </div>
        {state.total > 0 && (
          <div className={styles.left}>
            <CartPay data={state} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
