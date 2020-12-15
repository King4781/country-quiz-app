import React from "react";

import styles from "./Flag.module.css";

const Flag = ({ flag }) => {
  return (
    <>
      <img className={styles.flag} src={flag} alt="flag" />
    </>
  );
};

export default Flag;
