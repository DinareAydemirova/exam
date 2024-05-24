import React from "react";
import style from "./basket.module.scss";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  removeAllFromBasket,
  removeFromBasket,
} from "../../../redux/slices/basketSlice";
import { FaTrashAlt } from "react-icons/fa";
import {
  addToWishlist,
  removeAllFromwishlist,
  removeFromWishlist,
} from "../../../redux/slices/wishlistSlice";
import helmet from "helmet";
import { Helmet } from "react-helmet";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basket);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const dispatch = useDispatch();

  // const isInWishlist = (id) => {
  //   return wishlist.some((elem) => elem._id == id);
  // };

  // const handleToggleWishlist = (item) => {
  //   if (isInWishlist) {
  //     dispatch(removeAllFromwishlist({ _id: item.id }));
  //   } else {
  //     dispatch(addToWishlist(item));
  //   }
  // };

  return (
    <div className={style.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <p>basket</p>
      <button onClick={() => dispatch(removeAllFromBasket())}>ClearAll</button>
      <div className={style.prods}>
        {basket.map((elem) => {
          return (
            <div key={elem._id} className={style.cards}>
              <img src={elem.image} alt="" />
              <p>{elem.name}</p>
              <span>{elem.price}</span>
              <div>
                <FaHeart
                  onClick={() => dispatch(removeFromWishlist({ _id: elem.id }))}
                />
                <FaTrashAlt
                  onClick={() => dispatch(removeFromBasket({ _id: elem.id }))}
                />
              </div>
              <div>
                <button onClick={() => dispatch(decrease({ _id: elem._id }))}>
                  -
                </button>
                <span>{elem.count}</span>
                <button onClick={() => dispatch(increase({ _id: elem._id }))}>
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
