import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [coursesData, setCoursesData] = useState([]);

  // Fetch courses.json from public folder
  useEffect(() => {
    fetch("/courses.json") // public
      .then((res) => res.json())
      .then((data) => setCoursesData(data))
      .catch((err) => console.error("Error loading courses:", err));
  }, []);

  return (
    <div className="container">
      <h2>Available Courses</h2>
      <div className="card-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.tutorial[0].description}</p>
            <Link to={`/courses/${course.id}`} className="btn">
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
