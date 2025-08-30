import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuizDetail = () => {
  const { id } = useParams(); // quiz id from URL

  console.log(typeof(id))
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Load quiz data from public/quizzes.json
  useEffect(() => {
    fetch("/quizzes.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedQuiz = data.find((q) => q.id === parseInt(id));
        setQuiz(selectedQuiz);
      });
  }, [id]);

/*

answers={


name:"lop",
dob:"999999"
}


...answers,name:"lop"



*/

  // Handle option selection
  const handleChange = (questionIndex, option) => {

    console.log(option)
    setAnswers({ ...answers, [questionIndex]: option });
  };


  
  // answer{

  //   0:"conio.h",
	// 1:"integer x;",
	
	
	// ....
	
	
	// 9:"jdkl"


  // }


  // Handle quiz submission
  const handleSubmit = () => {
    let scoreCount = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        scoreCount++; //1,2,.....3
      }
    });
    setScore(scoreCount);
    setSubmitted(true);
  };

  if (!quiz) return <p className="text-center mt-5">Loading quiz...</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{quiz.title}</h2>

{/*1st step coditional rendering */}
      {!submitted ? (
        <form>
          {quiz.questions.map((q, index) => (
            <div key={index} className="quiz-question">
              <h5>
                {index + 1}. {q.question}
              </h5>

              {/* Two-column options */}
              <div className="quiz-options">
                {q.options.map((option, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={answers[index] === option}

                      onChange={() => handleChange(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button
              type="button"
              className="btn"
              onClick={handleSubmit}
            >
              Submit Quiz
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <h3>
            ✅ You scored {score} / {quiz.questions.length}
          </h3>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
              setScore(0);
            }}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizDetail;
