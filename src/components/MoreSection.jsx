import React from "react";
import classes from "./moresection.module.css";

const MoreSection = (props) => {
  return (
    <div className={classes.sectionWrapper}>
      {props.sections.map((section, i) => {
        return (
          <div key={i}>
            <div className={classes.innerDiv}>
              <img src={section.img} alt="more-sections" />
              <div>{section.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoreSection;
