import React, { useEffect, useState, useCallback } from "react";
import Home from "./pages/Home/Home";
import TryAgainPage from "./pages/TryAgainPage/TryAgainPage";

import { fetchData } from "./utils/functions";

import "./App.css";

import logo from "./images/logo.svg";

function App() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [showTryAgainPage, setShowTryAgainPage] = useState(false);
  const [correctQuestionArray, setCorrectQuestionArray] = useState([]);

  const handleSetQuestion = useCallback(() => {
    setQuestion(questions[questionIndex]);
  }, [questions, questionIndex]);

  useEffect(() => {
    if (questions.length === 0) {
      fetchData(setQuestions, setLoading, setError);
    } else {
      handleSetQuestion();
    }

    if (question) {
      if (question.correctAnswer === selectedAnswer && !isCorrect) {
        setCorrectAnswerCount((prevState) => ++prevState);
        setIsCorrect(true);
      }
    }
  }, [questions, question, selectedAnswer, isCorrect, handleSetQuestion]);

  let page = (
    <Home
      questions={questions}
      question={question}
      setQuestionIndex={setQuestionIndex}
      loading={loading}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      isCorrect={isCorrect}
      setIsCorrect={setIsCorrect}
      setShowTryAgainPage={setShowTryAgainPage}
      correctQuestionArray={correctQuestionArray}
      setCorrectQuestionArray={setCorrectQuestionArray}
      error={error}
    />
  );

  if (showTryAgainPage) {
    page = (
      <TryAgainPage
        correctAnswerCount={correctAnswerCount}
        setShowTryAgainPage={setShowTryAgainPage}
        setCorrectAnswerCount={setCorrectAnswerCount}
      />
    );
  }

  return (
    <div className="container">
      {!showTryAgainPage && (
        <img
          className="logo"
          src={logo}
          alt="Our logo of a man carring a suitecase"
        />
      )}
      <h2 className="heading">Country Quiz</h2>
      {page}
    </div>
  );
}

export default App;
