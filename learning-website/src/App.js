import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import Quizzes from "./components/Quizzes";
import QuizDetail from "./components/QuizDetail";
import About from "./components/About";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <h1>Learning Website</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/quizzes">Quizzes</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        {/* Main Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
                 
                 
                 <Route path="/quizzes" element={<Quizzes />} /> 
<Route path="/quizzes/:id" element={<QuizDetail />} />  //data pass




            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error msg={"invalid url"}/>}/>
            <Route path="/courses/:id/*" element={<Error msg={"invalid courses url"}/>}/>
            <Route path="/quizzes/:id/*" element={<Error msg={"invalid quizes url"}/>}/>
            <Route path="/about/*" element={<Error msg={"invalid about url"}/>}/>


          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} | Veera Babu | Final Year Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
