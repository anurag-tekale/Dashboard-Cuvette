import "./Question.css";

const Question = ({ score }) => {
  return (
    <div className="question container">
      <div className="question__head">
        <h2 className="question__ttl">Question Analysis</h2>
        <span>{score} / 15</span>
      </div>
      <p className="question__txt">
        <b>You scored {score} question correct out of 15.</b> However it still
        needs some improvements
      </p>
      <div className="pipe-chart">
        <div className="outer">
          <div className="inner">
            <img src="/images/target.png" alt="" />
          </div>
        </div>

        <svg
          xmlns="https://www.w3.org/2000/svg"
          version="1.1"
          width="180px"
          height="180px"
        >
          <defs>
            <linearGradient>
              <stop offset="0%" stopColor="#DA22FF"></stop>
              <stop offset="100%" stopColor="#9733EE"></stop>
            </linearGradient>
          </defs>
          <circle
            cx="90"
            cy="90"
            r="70"
            strokeLinecap="round"
            strokeDashoffset={450 - 450 * (score / 15)}
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Question;
