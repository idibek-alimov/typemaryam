import React from "react";
import CircleM from "../../../extra/circlem/CircleM";
import { useAppSelector } from "../../../store/hooks";
import List from "../../tools/list/List";
import "./CartList.css";
import CartItem from "./item/CartItem";
import Resent from "../resent/Resent";

const CartList = () => {
  const cartProducts = useAppSelector((state) => state.cart.cart_products);
  return (
    <div className="cart-page">
      {/* <div className="cart-product-list">
        <div>
          <h1>Shopping cart</h1>
          <div className="price-text">Price</div>
          <div className="the-line"></div>
          <div className="product">
            {cartProducts ? (
              cartProducts.map((product) => {
                return (
                  <div>
                    <CartItem {...product} />

                    <div className="the-line"></div>
                  </div>
                );
              })
            ) : (
              <div>there are no products yet</div>
            )}
          </div>
        </div>
        <div className="subtotal">
          Subtotal ({cartProducts.length} items): <span>200</span>
        </div>
      </div>
      <div className="check-and-resent">
        <div className="checkout">
          <div>
            Subtotal (1 item ): <span>$30.99</span>
          </div>
          <div className="checkout-button-div">
            <button className="checkout-button button">go to checkout</button>
          </div>
        </div>
        <Resent />
      </div> */}
    </div>
  );
};

export default CartList;
