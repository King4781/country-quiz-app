import React from "react";

import styles from "./TryAgain.module.css";

import winnerImg from "../../images/winner.svg";

const TryAgain = ({
  correctAnswerCount,
  setShowTryAgainPage,
  setCorrectAnswerCount,
}) => {
  let text = (
    <p>
      You got <span className={styles.span}>{correctAnswerCount}</span> correct
      answers
    </p>
  );

  if (correctAnswerCount === 0) {
    text = (
      <p>You didn't get any questions right, but practice makes perfect.</p>
    );
  }
  return (
    <div className={styles.container}>
      <img src={winnerImg} alt="Trophy with people celebrating" />
      <h1>Results</h1>
      {text}
      <button
        onClick={() => {
          setShowTryAgainPage(false);
          setCorrectAnswerCount(0);
        }}
        type="button"
      >
        Try again
      </button>
    </div>
  );
};

export default TryAgain;
