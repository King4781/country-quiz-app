import React from "react";

import styles from "./Answers.module.css";

import check from "../../images/check.svg";
import cross from "../../images/cross.svg";

const Answers = ({ answers, setSelectedAnswer, selectedAnswer, question }) => {
  function addButtonState(answer, isImage) {
    if (
      !selectedAnswer ||
      (selectedAnswer !== answer && question.correctAnswer !== answer)
    ) {
      if (!isImage) {
        return [styles.answer, styles.hover].join(" ");
      }
      return null;
    }

    if (question.correctAnswer === answer) {
      if (!isImage) {
        return [styles.answer, "success"].join(" ");
      }
      return <img src={check} alt="Check Mark" />;
    }

    if (!isImage) {
      return [styles.answer, "wrong"].join(" ");
    }

    return <img src={cross} alt="Cross" />;
  }

  return (
    <div className={styles.answers}>
      <div
        onClick={() => selectedAnswer === "" && setSelectedAnswer(answers[0])}
        className={addButtonState(answers[0], false)}
      >
        <span>A</span>
        <p>{answers[0]}</p>
        {addButtonState(answers[0], true)}
      </div>
      <div
        onClick={() => selectedAnswer === "" && setSelectedAnswer(answers[1])}
        className={addButtonState(answers[1], false)}
      >
        <span>B</span>
        <p>{answers[1]}</p>
        {addButtonState(answers[1], true)}
      </div>
      <div
        onClick={() => selectedAnswer === "" && setSelectedAnswer(answers[2])}
        className={addButtonState(answers[2], false)}
      >
        <span>C</span>
        <p>{answers[2]}</p>
        {addButtonState(answers[2], true)}
      </div>
      <div
        onClick={() => selectedAnswer === "" && setSelectedAnswer(answers[3])}
        className={addButtonState(answers[3], false)}
      >
        <span>D</span>
        <p>{answers[3]}</p>
        {addButtonState(answers[3], true)}
      </div>
    </div>
  );
};

export default Answers;
