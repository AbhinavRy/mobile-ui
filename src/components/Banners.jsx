import React from "react";
import classes from "./banners.module.css";

const Banners = (props) => {
  return (
    <div className={classes.bannerWrapper}>
      {props.links.map((link, i) => {
        return (
          <div key={i}>
            <img className={classes.bannerImg} src={link} alt="banner-img" />
          </div>
        );
      })}
    </div>
  );
};

export default Banners;
