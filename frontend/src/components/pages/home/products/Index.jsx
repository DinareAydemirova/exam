import React, { useEffect, useState } from "react";
import style from "./product.module.scss";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../../redux/slices/basketSlice";
import {
  addToWishlist,
  removeAllFromwishlist,
} from "../../../../redux/slices/wishlistSlice";

const Products = () => {
  const [data, setdata] = useState([]);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/flowers").then((res) => {
      setdata(res.data);
    });
  }, []);

  const isInWishlist = (id) => {
    return wishlist.some((elem) => elem._id == id);
  };

  const handleToggleWishlist = (item) => {
    if (isInWishlist) {
      dispatch(removeAllFromwishlist({ _id: item.id }));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.toptexts}>
        <div>
          <p>OUR FLOWER</p>
          <span>New Arrivals</span>
        </div>
      </div>
      <div className={style.caategories}>
        <ul>
          <li className={style.categoy}>All</li>
          <li>Boquet</li>
          <li>Flower Box</li>
          <li>Flower Shelf</li>
          <li> Basket of flower</li>
          <li> Gift combos</li>
        </ul>
      </div>
      <div className={style.prods}>
        {data.map((elem) => {
          return (
            <div className={style.cards}>
              <img src={elem.image} alt="" />
              <p>{elem.name}</p>
              <span>{elem.price}</span>
              <div>
                <FaHeart style={{color:isInWishlist(elem._id)? "red":"black"}} onClick={()=>dispatch(addToWishlist(elem)) } />
                <SlHandbag onClick={() => dispatch(addToBasket(elem))} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
