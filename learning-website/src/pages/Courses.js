import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";

function Courses() {
  const [items, setItems] = useState([]);

  // Fetch courses.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/courses.json");
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="courses-container">
      <h2>📚 Our Courses & Quizzes</h2>
      <div className="card-grid">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className={item.type === "Course" ? "tag course" : "tag quiz"}>
              {item.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
