import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Student = () => {
  const classId = localStorage.getItem("classId");
  const [data, setData] = useState({ studentList: {} });
  //Unable CORSE in Browser
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://quizdance.herokuapp.com/api/search-student-class/".concat(
          classId
        )
      );
      setData(result.data);
    };
    fetchData();
  }, [classId]);

  const listStudent = Object.values(data);
  return (
    <ul>
      {listStudent.map((item) => (
        <li key={item.id + 1}>
          <Link
            to="/LecturerView"
            onClick={() => localStorage.setItem("id", item.studentId)}
          >
            {item.studentId}
          </Link>
        </li>
      ))}
    </ul>
  );
};