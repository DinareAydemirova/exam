import React from "react";
import { FaHeart } from "react-icons/fa";
import { addToBasket } from "../../../redux/slices/basketSlice";
import style from "./wishlist.module.scss";
import { SlHandbag } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFromwishlist,
  removeFromWishlist,
} from "../../../redux/slices/wishlistSlice";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const dispatch = useDispatch();

  // const handleToggleWishlist = (item) => {
  //   dispatch(removeAllFromwishlist({ _id: item.id }));
  // };

  return (
    <div className={style.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <p>wishlist</p>
      <button onClick={() => dispatch(removeAllFromwishlist())}>
        cleart all
      </button>
      <div className={style.prods}>
        {wishlist.map((elem) => {
          return (
            <div key={elem._id} className={style.cards}>
              <img src={elem.image} alt="" />
              <p>{elem.name}</p>
              <span>{elem.price}</span>
              <div>
                <FaHeart
                  style={{ color: "red" }}
                  onClick={() => dispatch(removeFromWishlist({ _id: elem.id }))}
                />
                <SlHandbag onClick={() => dispatch(addToBasket(elem))} />
                <FaTrashAlt
                  onClick={() =>
                    dispatch(removeFromWishlist({ _id: elem._id }))
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
