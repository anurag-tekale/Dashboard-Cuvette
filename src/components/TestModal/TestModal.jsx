import React from "react";
import "./TestModal.css";

const TestModal = ({setModalStatus}) => {
  return (
    <div className="test-modal">
      <h4 className="test">Skill Test</h4>
      <div className="container">
        <img className="logo" src="./images/html5.svg" alt="" />
        <div className="test-details">
          <h4 className="test-details-1">Hypertext Markup Language</h4>
          <h5 className="test-details-2">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </h5>
        </div>
        <button className="btn-01" onClick={()=>setModalStatus(true)}>Update</button>
      </div>
    </div>
  );
};

export default TestModal;
