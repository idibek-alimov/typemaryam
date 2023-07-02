import React, { useState, MouseEvent, useEffect } from "react";
import "./Detail.css";
import cartSlice, {
  addToCart,
  removeFromCart,
} from "../../../store/features/cart/cartSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Product } from "../../../extra/types/Product";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Article } from "../../../extra/types/Article";
import ArticleChoose from "./articlechoose/ArticleChoose";
import Similar from "../../list/similar/Similar";
import { Picture } from "../../../extra/types/Picture";
import Axios, { url } from "../../../extra/axios";
import CircleM from "../../../extra/circlem/CircleM";
import { Inventory } from "../../../extra/types/Inventory";

const Detail = () => {
  const [activeImage, setActiveImage] = useState<Number>();
  const [chosenInventory, setChosenInventory] = useState<Inventory>();
  // const [product, setProduct] = useState<Product>();
  const [article, setArticle] = useState<Article>();
  const [mainPic, setMainPic] = useState<string>();
  // const [sizeNotChosen, setSizeNotChose] = useState();
  const [highlight, setHighlight] = useState<string>();
  const highlightSize = () => {
    setHighlight("high-light-size");
    window.setTimeout(() => {
      setHighlight("");
    }, 1000);
  };

  const handleMouseOver = (event: MouseEvent<HTMLImageElement>) => {
    setActiveImage(1);
  };
  let { id } = useParams();
  let axios = Axios();

  const onArticleChangeHandle = (id: number) => {
    if (id != article?.id)
      axios.get(url + `/api/article/allow/${id}`).then((res) => {
        setArticle(res.data);
        setMainPic(res.data.pictures[0].src.split("/").pop());
      });
  };
  useEffect(() => {
    axios.get(url + `/api/article/allow/${id}`).then((res) => {
      console.log("detail article", res.data);
      setArticle(res.data);
      setMainPic("sdfsd");
    });
  }, []);
  useEffect(() => {
    if (
      article?.inventories.length === 1 &&
      article.inventories[0].size.length === 0
    ) {
      setChosenInventory(article.inventories[0]);
    }
  }, [article]);

  type ProductLikeProp = {
    article: Article | undefined;
  };
  const LikeButton = ({ article }: ProductLikeProp) => {
    const user = useAppSelector((state) => state.user.username);
    const navigate = useNavigate();
    const onLikeHandle = () => {
      if (!user) {
        navigate("/login");
      }
      if (article && user !== undefined) {
        setArticle({ ...article, likes: !article.likes });
        axios
          .get(url + `/api/like/${article.id}`)
          .then((res) => {
            console.log("like response", res);
            // if (res.status === 200) {
            //   setArticle({ ...article, likes: !article.likes });
            // }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    return (
      <div className="like-button-box">
        {article?.likes ? (
          <button onClick={onLikeHandle}>
            <svg
              width="21"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                width="21"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.31 6.441c0-1.751 1.392-3.152 3.322-3.152 1.058 0 2.133.49 2.81 1.26a1.41 1.41 0 0 0 2.116 0c.677-.77 1.752-1.26 2.81-1.26 1.93 0 3.322 1.4 3.322 3.152 0 1.02-.706 2.394-2.272 4.164-1.306 1.476-3.029 3.034-4.918 4.66-1.89-1.626-3.612-3.184-4.918-4.66C4.016 8.835 3.31 7.46 3.31 6.44ZM6.632.5C3.235.5.5 3.066.5 6.441c0 2.122 1.356 4.178 2.97 6.004 1.666 1.883 3.888 3.824 6.116 5.72a1.412 1.412 0 0 0 1.828 0c2.228-1.896 4.45-3.837 6.115-5.72C19.144 10.62 20.5 8.563 20.5 6.441 20.5 3.066 17.765.5 14.368.5 12.983.5 11.61.96 10.5 1.758A6.694 6.694 0 0 0 6.632.5Z"
                  fill="#CB11AB"
                  stroke="#fff"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 1c2.554.01 4.535 1.597 5.23 4.024.369 1.285.14 2.669-.452 3.867-2.231 4.512-7.367 7.741-8.03 8.73a1.656 1.656 0 0 1-1.496 0c-.9-.848-2.239-1.915-3.618-3.21C1.732 10.276.461 1 6.5 1c1.78 0 2.706.52 4 1.5 1.013-.782 2.5-1.5 4-1.5Z"
                  fill="#CB11AB"
                />
              </svg>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5 1c2.554.01 4.535 1.597 5.23 4.024.369 1.285.14 2.669-.452 3.867-2.231 4.512-7.367 7.741-8.03 8.73a1.656 1.656 0 0 1-1.496 0c-.9-.848-2.239-1.915-3.618-3.21C1.732 10.276.461 1 6.5 1c1.78 0 2.706.52 4 1.5 1.013-.782 2.5-1.5 4-1.5Z"
                fill="#CB11AB"
              />
              <svg
                width="21"
                height="19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.31 6.441c0-1.751 1.392-3.152 3.322-3.152 1.058 0 2.133.49 2.81 1.26a1.41 1.41 0 0 0 2.116 0c.677-.77 1.752-1.26 2.81-1.26 1.93 0 3.322 1.4 3.322 3.152 0 1.02-.706 2.394-2.272 4.164-1.306 1.476-3.029 3.034-4.918 4.66-1.89-1.626-3.612-3.184-4.918-4.66C4.016 8.835 3.31 7.46 3.31 6.44ZM6.632.5C3.235.5.5 3.066.5 6.441c0 2.122 1.356 4.178 2.97 6.004 1.666 1.883 3.888 3.824 6.116 5.72a1.412 1.412 0 0 0 1.828 0c2.228-1.896 4.45-3.837 6.115-5.72C19.144 10.62 20.5 8.563 20.5 6.441 20.5 3.066 17.765.5 14.368.5 12.983.5 11.61.96 10.5 1.758A6.694 6.694 0 0 0 6.632.5Z"
                  fill="#CB11AB"
                  stroke="#fff"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 1c2.554.01 4.535 1.597 5.23 4.024.369 1.285.14 2.669-.452 3.867-2.231 4.512-7.367 7.741-8.03 8.73a1.656 1.656 0 0 1-1.496 0c-.9-.848-2.239-1.915-3.618-3.21C1.732 10.276.461 1 6.5 1c1.78 0 2.706.52 4 1.5 1.013-.782 2.5-1.5 4-1.5Z"
                  fill="#CB11AB"
                />
              </svg>
              <path
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5 1c2.554.01 4.535 1.597 5.23 4.024.369 1.285.14 2.669-.452 3.867-2.231 4.512-7.367 7.741-8.03 8.73a1.656 1.656 0 0 1-1.496 0c-.9-.848-2.239-1.915-3.618-3.21C1.732 10.276.461 1 6.5 1c1.78 0 2.706.52 4 1.5 1.013-.782 2.5-1.5 4-1.5Z"
                fill="#CB11AB"
              />
            </svg>
            {/* <AiFillHeart className="like-icon" /> */}
          </button>
        ) : (
          <button onClick={onLikeHandle}>
            <svg
              width="21"
              height="19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.414 18.164-.324-.38.324.38c2.228-1.895 4.45-3.836 6.115-5.719C19.144 10.62 20.5 8.563 20.5 6.441 20.5 3.066 17.765.5 14.368.5 12.983.5 11.61.96 10.5 1.758A6.694 6.694 0 0 0 6.632.5C3.235.5.5 3.066.5 6.441c0 2.122 1.356 4.178 2.97 6.004 1.666 1.883 3.888 3.824 6.116 5.72a1.412 1.412 0 0 0 1.828 0ZM3.31 6.441c0-1.751 1.392-3.152 3.322-3.152 1.058 0 2.133.49 2.81 1.26a1.41 1.41 0 0 0 2.116 0c.677-.77 1.752-1.26 2.81-1.26 1.93 0 3.322 1.4 3.322 3.152 0 1.02-.706 2.394-2.272 4.164-1.306 1.476-3.029 3.034-4.918 4.66-1.89-1.626-3.612-3.184-4.918-4.66C4.016 8.835 3.31 7.46 3.31 6.44Z"
                fill="#000"
                stroke="#fff"
                stroke-linejoin="round"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m11.414 18.164-.324-.38.324.38c2.228-1.895 4.45-3.836 6.115-5.719C19.144 10.62 20.5 8.563 20.5 6.441 20.5 3.066 17.765.5 14.368.5 12.983.5 11.61.96 10.5 1.758A6.694 6.694 0 0 0 6.632.5C3.235.5.5 3.066.5 6.441c0 2.122 1.356 4.178 2.97 6.004 1.666 1.883 3.888 3.824 6.116 5.72a1.412 1.412 0 0 0 1.828 0ZM3.31 6.441c0-1.751 1.392-3.152 3.322-3.152 1.058 0 2.133.49 2.81 1.26a1.41 1.41 0 0 0 2.116 0c.677-.77 1.752-1.26 2.81-1.26 1.93 0 3.322 1.4 3.322 3.152 0 1.02-.706 2.394-2.272 4.164-1.306 1.476-3.029 3.034-4.918 4.66-1.89-1.626-3.612-3.184-4.918-4.66C4.016 8.835 3.31 7.46 3.31 6.44Z"
                fill="#000"
                stroke="#fff"
                stroke-linejoin="round"
              />
            </svg>
            {/* <AiOutlineHeart className="like-icon" /> */}
          </button>
        )}
      </div>
    );
  };

  return (
    <div>
      {article ? (
        <div className="detail-page-box">
          {/* <div className="detail-top">
            <PastPath>
              <>{article.brand ? article.brand : ""}</>
            </PastPath>
            <PastPath>
              <>/{article.name ? article.name : ""}</>
            </PastPath>
            <PastPath>
              <>Mans Shirt /</>
            </PastPath>
          </div> */}
          <div className="detail-product-box">
            <div className="detail-page-name">
              <div className="name">
                <h1>{article?.name}</h1>
              </div>
              {/* <div className="stars-and-stuff">
                <div className="feedback">12 feedback</div>
                <div className="articul">
                  Articul: <span>{article?.id}</span>
                </div>
                <div className="sold-count"> More than 30 sold</div>
              </div> */}
            </div>
            <div className="detail-page-pic">
              <div className="pic-box">
                {article?.pictures
                  ? article?.pictures.map((pic, index) => {
                      return (
                        <img
                          src={"/product.jpg"}
                          alt="desert1.jpg"
                          className={activeImage ? "highligt" : ""}
                          id={`pic-${index}`}
                          onMouseOver={() => {
                            if (article?.pictures && article?.pictures[index])
                              setMainPic(
                                article.pictures[index]
                                //article.pictures[index].src.split("/").pop()
                              );
                          }}
                        />
                      );
                    })
                  : ""}
                <div className="small-screen-like">
                  {article?.pictures ? <LikeButton article={article} /> : ""}
                </div>
              </div>
              <div className="pic-navigate-div">
                {/* <div className="pic-navigate-box">
                  {article?.pictures.map((pic, index) => {
                    return <a href={`#pic-${index}`}>{index}</a>;
                  })}
                </div> */}
              </div>
              <div className="mainpic-div">
                <div className="mainpic-box">
                  <img src={"/product.jpg"} alt="desert.jpg" />
                </div>
              </div>
              <div className="detail-left">
                <div className="detail-left-tocart">
                  <div className="price-box">
                    <ins className="price">
                      {article?.inventories && article.inventories[0]
                        ? article?.inventories[0].price
                        : ""}
                    </ins>
                    <del className="old-price">
                      {article.inventories && article?.inventories[0].price
                        ? article.inventories[0].price
                        : ""}
                    </del>
                  </div>
                  <div className="composition description">
                    description:{" "}
                    <span>
                      {article?.description ? article.description : ""}
                    </span>
                  </div>

                  <div className="composition">
                    color:{" "}
                    <span>{article && article.color ? article.color : ""}</span>
                  </div>
                  {/* <div>
                    {article.product_id ? (
                      <ArticleChoose
                        product_id={article.product_id}
                        func={onArticleChangeHandle}
                      />
                    ) : (
                      ""
                    )}
                  </div> */}
                  {article.inventories.length > 1 &&
                    article.inventories[0].size.length > 0 && (
                      <div className="size-div">
                        <span className="size-div-name">Size table</span>
                        <ul className="size">
                          {article.inventories
                            ? article?.inventories.map((s) => (
                                <li
                                  onClick={(event) => {
                                    console.log("printing event", event);
                                    event.preventDefault();
                                    setChosenInventory(s);
                                  }}
                                  className={highlight}
                                  id={
                                    chosenInventory?.size === s.size
                                      ? "chosen-size"
                                      : ""
                                  }
                                >
                                  {chosenInventory ? (
                                    <Size
                                      currentSize={chosenInventory?.size}
                                      size={s.size}
                                    ></Size>
                                  ) : (
                                    ""
                                  )}
                                </li>
                              ))
                            : ""}
                        </ul>
                      </div>
                    )}
                  <div className="add-to-cart">
                    <CartButton
                      article={article}
                      inventory={chosenInventory}
                      func={highlightSize}
                    />
                    <LikeButton article={article} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {article ? <Similar id={article?.id} func={onArticleChangeHandle} /> : ""} */}
        </div>
      ) : (
        <CircleM />
      )}
    </div>
  );
};

export default Detail;

type Props = {
  //    title: string,
  children: JSX.Element | string;
};

const PastPath = ({ children }: Props) => {
  return (
    <div>
      <li>
        <a>
          <span className="path-text">{children}</span>
        </a>
      </li>
    </div>
  );
};

type SizeProps = {
  currentSize: string;
  size: string;
};
const Size = ({ currentSize, size }: SizeProps) => {
  return <span>{size}</span>;
};

type ProductProp = {
  article: Article | undefined;
  inventory?: Inventory | undefined;
  func?: () => void;
};

const CartButton = ({ article, inventory, func }: ProductProp) => {
  //let cart = useAppSelector((state) => state.cart.cart_products);
  // const [contains, setContains] = useState(false);
  let dispatch = useAppDispatch();

  const onAddToCartHandle = (event: React.MouseEvent<HTMLElement>) => {
    // console.log(product);
    // console.log(size);
    if (article && inventory) {
      //alert(String(product.id) + "is trying to add itself");
      dispatch(addToCart({ ...article, inventory: inventory }));
    } else if (!inventory) {
      if (func) {
        func();
      }
    }
    // if (size != "none") {
    //   setContains(!contains);
    // }
  };

  // const onRemoveFromCartHandle = () => {
  //   if (product) {
  //     dispatch(removeFromCart(product.id));
  //   }
  //   if (size != "none") {
  //     setContains(!contains);
  //   }
  // };

  return (
    <div>
      {/* {contains ? (
        <button className="button remove" onClick={onRemoveFromCartHandle}>
          remove from cart
        </button>
      ) : (
        <button className="button add" onClick={onAddToCartHandle}>
          add to cart
        </button>
      )} */}
      <button className="add-button" onClick={onAddToCartHandle}>
        add to cart
      </button>
    </div>
  );
};
