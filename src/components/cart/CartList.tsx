import React, { useState, useEffect, useRef } from "react";
import CircleM from "../../extra/circlem/CircleM";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import "./CartList.css";
import CartItem from "./item/CartItem";
import { useNavigate } from "react-router-dom";
import { clearTheCart } from "../../store/features/cart/cartSlice";
import Axios, { url } from "../../extra/axios";
import useOnScreen from "../../extra/Visible";
import ChangeName from "../profile/profileDetail/editData/ChangeName";
interface PriceAmountProps {
  price: number | undefined;
  amount: number | undefined;
}

const CartList = () => {
  const cartProducts = useAppSelector((state) => state.cart.cart_products);
  const credentials = useAppSelector((state) => state.user);

  const [priceAndAmount, setPriceAndAmount] = useState<PriceAmountProps>();
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const navigate = useNavigate();

  const [editShow, setEditShow] = useState("");
  const EmptyEditShow = () => {
    setEditShow("");
  };
  const onPreCheckOutHandle = () => {
    setEditShow("edit-name");
  };

  useEffect(() => {
    let price = 0;
    let amount = 0;
    cartProducts.map((article) => {
      if (article?.inventory && article.amount) {
        price += article.inventory.price * article.amount;
        amount += article.amount;
      }
    });
    setPriceAndAmount({ price: price, amount: amount });
  }, [cartProducts]);
  const user = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  let axios = Axios();
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
        console.log(items);
        //setItemList(items);

        axios
          .post(url + "/api/order/add", {
            address: address,
            items: items,
          })
          .then((res) => {
            console.log(res);
            navigate("order/success");
            dispatch(clearTheCart());
          })
          .catch((err) => console.log(err));
      }
    } else {
      navigate("/login");
    }
  };
  const CheckOut = ({ price, amount }: PriceAmountProps) => {
    const cartProducts = useAppSelector((state) => state.cart.cart_products);
    //const [itemList, setItemList] = useState<OrderItem[]>([]);

    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user.username);
    const dispatch = useAppDispatch();
    let axios = Axios();
    return (
      <div className="checkout">
        <div>
          Subtotal ({amount} item ): <span>{price}</span>
        </div>
        <div className="checkout-button-div">
          <button
            className="checkout-button button"
            onClick={onPreCheckOutHandle}
          >
            checkout
          </button>
        </div>
      </div>
    );
  };
  /////////////////////////////////////////////////////////
  let [address, setAddress] = useState(credentials.address);
  let adres = credentials.address;
  const AddressCheck = () => {
    return (
      <div
        className="name-change-box"
        id={editShow && editShow.length > 0 ? "edit-name-show" : ""}
      >
        <div className="change-name-text">{"Is this your address"}</div>
        <div className="change-name-input-box">
          <span>{"if not you should change it"}</span>

          <input
            value={adres}
            onChange={(event) => {
              // event.preventDefault();
              //setAddress(event.currentTarget.value);
              adres = event.target.value;
            }}
          />
        </div>
        <div className="change-name-button-box ">
          <button className="save" onClick={() => onCheckOutHandle(address)}>
            Save
          </button>
          <button className="cancle" onClick={() => setEditShow("")}>
            Cancle
          </button>
        </div>
      </div>
    );
  };

  ////////////////////////////////////////////////////////

  return (
    <div className="cart-page">
      {cartProducts.length != 0 ? (
        <div className="cart-page">
          <div className="cart-product-list">
            <div>
              <h1>Shopping cart</h1>
              <div className="the-line"></div>
              <div className="product">
                {cartProducts ? (
                  cartProducts.map((article) => {
                    return (
                      <div>
                        <CartItem {...article} />
                      </div>
                    );
                  })
                ) : (
                  <div>there are no products yet</div>
                )}
              </div>
            </div>
          </div>
          <div
            className="hover-check-out"
            id={isVisible ? "" : "hover-check-out-visible"}
          >
            <CheckOut
              price={priceAndAmount?.price}
              amount={priceAndAmount?.amount}
            />
          </div>
          <div className="check-div">
            <div className="check-and-resent" ref={ref}>
              <CheckOut
                price={priceAndAmount?.price}
                amount={priceAndAmount?.amount}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <span>Your cart is empty</span>
          <span className="back-to-shopping" onClick={() => navigate("/")}>
            Back to Shopping
          </span>
        </div>
      )}
      <div
        className="back-grey"
        id={editShow ? "show" : ""}
        onClick={() => setEditShow("")}
      ></div>
      <AddressCheck />
    </div>
  );
};

export default CartList;

interface OrderItem {
  inventoryId: number;
  quantity: number | undefined;
}
