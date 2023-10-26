import React from "react";
import "./Syllabus.css";

const syllabusData = [
  { title: "HTML Tools, Forms, History", percentage: 80 },
  { title: "Tags & References in HTML", percentage: 60 },
  { title: "Tables & CSS Basics", percentage: 24 },
  { title: "Tables & CSS Basics", percentage: 96 },
];

const Syllabus = () => {
  return (
    <div className="syllabus container">
      <h2 className="syllabus__ttl">Syllabus wise Analysis</h2>
      <div>
        {syllabusData.map((item, index) => (
          <div className="syllabus__item" key={index}>
            <p className="syllabus__item--txt">{item.title}</p>
            <div className="syllabus__item--data">
              <span className="syllabus__item--bar">
                <span style={{ width: `${item.percentage}%` }}></span>
              </span>
              <div className="syllabus__item--text">{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
