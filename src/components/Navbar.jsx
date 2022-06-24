import React from "react";
import classes from "./navbar.module.css";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoBagOutline, IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

const Navbar = (props) => {
  const setNav = (value) => {
    props.setCurrentNav(value);
    if (value === 1) {
      props.setOpenSearch(true);
    }
  };

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.option} onClick={() => setNav(0)}>
        <IoHomeOutline
          style={{ stroke: `${props.currentNav === 0 ? "red" : "black"}` }}
        />
        <div
          className={classes.optionTitle}
          style={{ color: `${props.currentNav === 0 ? "red" : "black"}` }}
        >
          Home
        </div>
      </div>
      <div className={classes.option} onClick={() => setNav(1)}>
        <AiOutlineSearch
          style={{ fill: `${props.currentNav === 1 ? "red" : "black"}` }}
        />
        <div
          className={classes.optionTitle}
          style={{ color: `${props.currentNav === 1 ? "red" : "black"}` }}
        >
          Search
        </div>
      </div>
      <div className={classes.option} onClick={() => setNav(2)}>
        <BiCategory
          style={{ fill: `${props.currentNav === 2 ? "red" : "black"}` }}
        />
        <div
          className={classes.optionTitle}
          style={{ color: `${props.currentNav === 2 ? "red" : "black"}` }}
        >
          Category
        </div>
      </div>
      <div className={classes.option} onClick={() => setNav(3)}>
        <IoBagOutline
          style={{ stroke: `${props.currentNav === 3 ? "red" : "black"}` }}
        />
        <div
          className={classes.optionTitle}
          style={{ color: `${props.currentNav === 3 ? "red" : "black"}` }}
        >
          Cart
        </div>
      </div>
      <div className={classes.option} onClick={() => setNav(4)}>
        <AiOutlineUser
          style={{ fill: `${props.currentNav === 4 ? "red" : "black"}` }}
        />
        <div
          className={classes.optionTitle}
          style={{ color: `${props.currentNav === 4 ? "red" : "black"}` }}
        >
          Account
        </div>
      </div>
    </div>
  );
};

export default Navbar;
