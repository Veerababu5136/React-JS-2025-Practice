// src/components/CourseDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams(); // get course id from URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // fetch data from public/courses.json
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedCourse = data.find((c) => String(c.id) === id);
        setCourse(selectedCourse);
      })
      .catch((err) => console.error("Error loading course:", err));
  }, [id]);

  if (!course) {
    return <h2 className="text-center">Loading course details...</h2>;
  }

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <img
        src={course.image}
        alt={course.title}
        className="course-image"
      />
      <p>
        <strong>Description:</strong> {course.tutorial[0].description}
      </p>

      <div className="subtopics">
        <h3>Subtopics</h3>
        {course.tutorial[0].subtopics.map((sub, index) => (
          <div key={index}>
            <h4>{sub.title}</h4>
            <p>{sub.explanation}</p>
          </div>
        ))}
      </div>

      <Link to="/courses" className="btn">
        ⬅ Back to Courses
      </Link>
    </div>
  );
}

export default CourseDetail;
