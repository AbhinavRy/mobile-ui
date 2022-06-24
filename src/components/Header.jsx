import React, { useState } from "react";
import classes from "./header.module.css";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";

const Header = (props) => {
  // const [cartCount, setCartCount] = useState(0);
  const cartCount = 0;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Item1", "Item2", "Item3"];
  return (
    <>
      <div
        onClick={() => setMenuOpen(false)}
        className={classes.menuWrapper}
        style={{ width: `${menuOpen ? "100%" : "0"}` }}
      >
        <div className={classes.menu}>
          <p className={classes.profile}>Profile</p>
          {menuItems.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </div>
      <div
        className={classes.searchBarWrapper}
        style={{ width: `${props.openSearch ? "100%" : "0"}` }}
      >
        <div className={classes.closeSearch}>
          <span onClick={() => props.setOpenSearch(false)}>x</span>
        </div>
        <input className={classes.searchBar} placeholder="Search" />
      </div>
      <div className={classes.headerWrapper}>
        <GiHamburgerMenu onClick={() => setMenuOpen(true)} />
        <div className={classes.headerTools}>
          <AiOutlineSearch onClick={() => props.setOpenSearch(true)} />
          <AiOutlineBell />
          <div className={classes.cart}>
            <IoBagOutline />
            <span className={classes.cartCount}>
              <span>{cartCount}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
