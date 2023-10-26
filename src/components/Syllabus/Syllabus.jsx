import "./Syllabus.css";

const Syllabus = () => {
  return (
    <div className="syllabus container">
      <h2 className="syllabus__ttl">Syllabus wise Analysis</h2>
      <div>
        <div className="syllabus__item">
          <p className="syllabus__item--txt">HTML Tools, Forms, History</p>
          <div className="syllabus__item--data">
            <span className="syllabus__item--bar"><span style={{width: "80%"}}></span></span>
            <div className="syllabus__item--text">80%</div>
          </div>
        </div>
        <div className="syllabus__item">
          <p className="syllabus__item--txt">Tags & References in HTML</p>
          <div className="syllabus__item--data">
            <span className="syllabus__item--bar"><span style={{width: "60%"}}></span></span>
            <div className="syllabus__item--text">60%</div>
          </div>
        </div>
        <div className="syllabus__item">
          <p className="syllabus__item--txt">Tables & CSS Basics</p>
          <div className="syllabus__item--data">
            <span className="syllabus__item--bar"><span style={{width: "24%"}}></span></span>
            <div className="syllabus__item--text">24%</div>
          </div>
        </div>
        <div className="syllabus__item">
          <p className="syllabus__item--txt">Tables & CSS Basics</p>
          <div className="syllabus__item--data">
            <span className="syllabus__item--bar"><span style={{width: "96%"}}></span></span>
            <div className="syllabus__item--text">96%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
