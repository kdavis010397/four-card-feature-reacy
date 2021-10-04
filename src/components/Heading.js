import { Fragment } from "react";

import classes from "./Heading.module.css";

const Heading = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>
        <span>Reliable, efficient delivery</span> Powered by Technology
      </h1>
      <p className={classes.description}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </Fragment>
  );
};

export default Heading;
