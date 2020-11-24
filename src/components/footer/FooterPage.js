import React from "react";
import "./FooterPage.scss";
import "../Lecturer/LecturerSite";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <h3>
          <Link to="/admin">Browse Quiz</Link>
        </h3>
      </div>
    </div>
  );
};
