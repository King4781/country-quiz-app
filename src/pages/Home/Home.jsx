import React from "react";
import Card from "../../components/Card/Card";
import Question from "../../components/Question/Question";
import Answers from "../../components/Answers/Answers";
import NextButton from "../../components/NextButton/NextButton";
import Flag from "../../components/Flag/Flag";

const Home = ({
  questions,
  question,
  setQuestionIndex,
  selectedAnswer,
  setSelectedAnswer,
  isCorrect,
  setIsCorrect,
  setShowTryAgainPage,
  correctQuestionArray,
  setCorrectQuestionArray,
  loading,
  error,
}) => {
  let content = <div>Loading</div>;

  if (!loading) {
    if (question.flag) {
      content = (
        <>
          <Flag flag={question.flag} />
          <Question question={question.question} />
          <Answers
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
            question={question}
            answers={question.answers}
          />
          {selectedAnswer !== "" && (
            <NextButton
              questions={questions}
              setQuestionIndex={setQuestionIndex}
              setSelectedAnswer={setSelectedAnswer}
              isCorrect={isCorrect}
              setIsCorrect={setIsCorrect}
              setShowTryAgainPage={setShowTryAgainPage}
              correctQuestionArray={correctQuestionArray}
              setCorrectQuestionArray={setCorrectQuestionArray}
            />
          )}
        </>
      );
    } else {
      content = (
        <>
          <Question question={question.question} />
          <Answers
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
            question={question}
            answers={question.answers}
          />
          {selectedAnswer !== "" && (
            <NextButton
              questions={questions}
              setQuestionIndex={setQuestionIndex}
              setSelectedAnswer={setSelectedAnswer}
              isCorrect={isCorrect}
              setIsCorrect={setIsCorrect}
              setShowTryAgainPage={setShowTryAgainPage}
              correctQuestionArray={correctQuestionArray}
              setCorrectQuestionArray={setCorrectQuestionArray}
            />
          )}
        </>
      );
    }
  }

  if (error) {
    content = (
      <h3 style={{ color: "red", margin: "2rem" }}>
        An error occured loading the page. Please try again later.
      </h3>
    );
  }

  return <Card>{content}</Card>;
};

export default Home;
