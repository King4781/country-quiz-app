import React from "react";
import Card from "../../components/Card/Card";
import TryAgain from "../../components/TryAgain/TryAgain";

const TryAgainPage = ({
  correctAnswerCount,
  setShowTryAgainPage,
  setCorrectAnswerCount,
}) => {
  return (
    <Card>
      <TryAgain
        correctAnswerCount={correctAnswerCount}
        setShowTryAgainPage={setShowTryAgainPage}
        setCorrectAnswerCount={setCorrectAnswerCount}
      />
    </Card>
  );
};

export default TryAgainPage;
