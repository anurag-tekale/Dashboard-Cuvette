import React from "react";
import "./Statistics.css";

const Statistics = ({ rank, percentile, score }) => {
  return (
    <div className="statistics">
      <div className="container">
        <h1 className="statistics__ttl">Quick Statistics</h1>
        <ul className="statistics__list">
          <li className="statistics__item">
            <div className="statistics__img">
              <img src="/images/cup.png" alt="" />
            </div>
            <div className="statistics__txt">
              <b>{rank}</b>
              <p>YOUR RANK</p>
            </div>
          </li>
          <li className="statistics__item">
            <div className="statistics__img">
              <img src="/images/schedule.png" alt="" />
            </div>
            <div className="statistics__txt">
              <b>{percentile}</b>
              <p>PERCENTILE</p>
            </div>
          </li>
          <li className="statistics__item">
            <div className="statistics__img">
              <img src="/images/tick.png" alt="" />
            </div>
            <div className="statistics__txt">
              <b>{score} / 15</b>
              <p>CORRECT ANSWERS</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statistics;
