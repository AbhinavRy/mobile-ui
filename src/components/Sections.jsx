import React from "react";
import classes from "./sections.module.css";

const Sections = (props) => {
  return (
    <div className={classes.sectionWrapper}>
      {props.sections.map((section, i) => {
        return (
          <div
            key={i}
            className={`${classes.sectionBox} ${classes.sectionBorder}`}
          >
            <img src={section.img} alt="category-section" />
            <p>{section.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
