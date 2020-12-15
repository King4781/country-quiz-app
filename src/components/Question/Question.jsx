import React from "react";

import styles from "./Question.module.css";

const Question = ({ question }) => {
  return (
    <>
      <h3 className={styles.question}>{question}</h3>
    </>
  );
};

export default Question;
