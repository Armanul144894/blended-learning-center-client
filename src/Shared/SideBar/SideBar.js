import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./SideBar.css";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="course-category">
      <h2>course category</h2>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/course/${category.id}`}>
            <ListGroup>
              <ListGroup.Item>{category.name}</ListGroup.Item>
            </ListGroup>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default SideBar;
