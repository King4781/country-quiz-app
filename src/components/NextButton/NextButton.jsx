import React from "react";

import styles from "./NextButton.module.css";

const NextButton = ({
  questions,
  setQuestionIndex,
  setSelectedAnswer,
  isCorrect,
  setIsCorrect,
  setShowTryAgainPage,
  correctQuestionArray,
  setCorrectQuestionArray,
}) => {
  function handleSetQuestionIndex() {
    let tempArray = [...correctQuestionArray];
    let index = Math.floor(Math.random() * questions.length);

    if (isCorrect) {
      if (!tempArray.includes(index)) {
        tempArray.push(index);
      } else {
        while (tempArray.includes(index)) {
          index = Math.floor(Math.random() * questions.length);
        }
        tempArray.push(index);
      }
      setCorrectQuestionArray(tempArray);
    }

    return index;
  }

  function handleNextClick() {
    if (!isCorrect) {
      setShowTryAgainPage(true);
      setCorrectQuestionArray([]);
    }
    setQuestionIndex(handleSetQuestionIndex());
    setSelectedAnswer("");
    setIsCorrect(false);
  }

  return (
    <div className={styles.btn}>
      <button onClick={handleNextClick} type="button">
        Next
      </button>
    </div>
  );
};

export default NextButton;
