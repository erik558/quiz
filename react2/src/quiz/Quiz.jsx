import React, { useState } from "react";
import "./quiz.css"

function Quiz() {
  const questions = [
    {
      quest1: "inch e HTML-y ?",
      answerOption: [
        { anserText: "hypertdg1sdfg12ext", isCorrect: false },
        { anserText: "dsgfdgdfg", isCorrect: false },
        { anserText: "hypertext", isCorrect: true },
        { anserText: "545g51fd1g2df1g2", isCorrect: false },
      ],
    },
    {
      quest1: "inch e css-y ?",
      answerOption: [
        { anserText: "hypertdg1sdfg12ext", isCorrect: false },
        { anserText: "dsgfdgdfg", isCorrect: true },
        { anserText: "hypertext", isCorrect: false },
        { anserText: "545g51fd1g2df1g2", isCorrect: false },
      ],
    },
    {
      quest1: "inch e js-y ?",
      answerOption: [
        { anserText: "hypertdg1sdfg12ext", isCorrect: true },
        { anserText: "dsgfdgdfg", isCorrect: false },
        { anserText: "hypertext", isCorrect: false },
        { anserText: "545g51fd1g2df1g2", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      {showScore ? (
        <div>
          duq vastakel eq {score} miavor, {questions.length}-ic
        </div>
      ) : (
        <div className="quizBox">
          <div className="questions">
            <span>harc {currentQuestion + 1}</span>/{questions.length}
            {questions[currentQuestion].quest1}
          </div>
          <div className="answers">
            {questions[currentQuestion].answerOption.map((answerOption) => (
              <button onClick={() => handleAnswer(answerOption.isCorrect)}>
                {answerOption.anserText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
