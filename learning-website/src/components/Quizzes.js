import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("/quizzes.json") // fetch from public/quizzes.json
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error("Error loading quizzes:", err));
  }, []);

  return (
    <div className="container">
      <h2>Available Quizzes</h2>
      <div className="card-grid">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="card">
            <h3>{quiz.title}</h3>
            <p>Total Questions: {quiz.questions.length}</p>
            <Link to={`/quizzes/${quiz.id}`} className="btn">
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quizzes;
