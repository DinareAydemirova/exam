import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { useSelector } from "react-redux";

const Header = () => {
  const basket =useSelector((state)=>state.basket.basket)
  const wishlist =useSelector((state)=>state.wishlist.wishlist)

  let basketCount=basket?.reduce((acc, elem)=>acc+=elem.count,0)

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <h1>Florist</h1>
        <ul>
          <Link>Home</Link>
          <Link>About</Link>

          <Link>Services</Link>
          <Link>Shop</Link>
          <Link>Pages</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </ul>
        <div className={style.actions}>
          <Link to="/wishlist">
            <GoHeart />
          </Link>
          <span>{wishlist.length}</span>
          <Link to="/basket">
            <SlHandbag  />
          </Link>
          <span>{basketCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
