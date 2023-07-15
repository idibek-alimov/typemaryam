import React, { useEffect, useState } from "react";
import "./CartList.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CartItem from "./cartItem/CartItem";
import Axios, { url } from "../../extra/axios";
import { clearTheCart } from "../../store/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

interface Prop {
  amount: number;
  price: number;
}
interface OrderItem {
  inventoryId: number;
  quantity: number | undefined;
}
const CartList = () => {
  const cartProducts = useAppSelector((state) => state.cart.cart_products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.username);
  let axios = Axios();
  const [sum, setSum] = useState<Prop>({ amount: 0, price: 0 });
  let amount = 0;
  let price = 0;
  useEffect(() => {
    cartProducts.map((item) => {
      if (item.amount) {
        amount += item.amount;
        price += item.amount * item.inventory.price;
      }
    });
    setSum({ amount: amount, price: price });
  }, [cartProducts]);

  const onCheckOutHandle = (address: string) => {
    if (user != undefined) {
      if (cartProducts.length != 0) {
        let items: OrderItem[] = [];
        cartProducts.map((item) => {
          items.push({
            inventoryId: item.inventory.id,
            quantity: item.amount,
          });
        });

        axios
          .post(url + "/api/order/add", {
            address: address,
            items: items,
          })
          .then((res) => {
            console.log("response from order", res);
            dispatch(clearTheCart());
          })
          .catch((err) => console.log("error from order", err));
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="cart-box">
      <span className="cart-text">Cart</span>
      <div className="items-wrapper">
        {cartProducts.map((item, index) => {
          return <CartItem key={index} {...item} />;
        })}
      </div>
      <div className="checkout-box">
        <button
          className="checkout-button"
          onClick={() => onCheckOutHandle("hello")}
        >
          <div>Checkout</div>
          <div className="sum-box">
            {sum.amount} items,{sum.price} comoni
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartList;
