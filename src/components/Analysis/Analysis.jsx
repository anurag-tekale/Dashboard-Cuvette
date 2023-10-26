import Question from "../Question/Question";
import Syllabus from "../Syllabus/Syllabus";
import "./Analysis.css";

const Analysis = ({ score}) => {
  return (
    <div className="analysis-block">
      <Syllabus ></Syllabus>
      <Question score={score}></Question>
    </div>
  );
};

export default Analysis;
