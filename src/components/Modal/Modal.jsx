import { useState } from "react";
import "./Modal.css";

const Modal = ({
  rank,
  percentile,
  score,
  setRank,
  setPercentile,
  setScore,
  setModalStatus,
}) => {
  const [rank1, setRank1] = useState(rank);
  const [percentile1, setPercentile1] = useState(percentile);
  const [score1, setScore1] = useState(score);

  const Save = () => {
    setRank(rank1);
    setPercentile(percentile1);
    setScore(score1);
    setModalStatus(false);
  };
  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__head">Update Scores</div>
        <div className="modal__item">
          <span className="modal__item--num">1</span>
          <p className="modal__item--txt">
            Update your <b>rank</b>
          </p>
          <input
            type="text"
            className="modal__item--input"
            value={rank1}
            onChange={(e) => setRank1(e.target.value)}
          />
        </div>
        <div className="modal__item">
          <span className="modal__item--num">2</span>
          <p className="modal__item--txt">
            Update your <b>percentile</b>
          </p>
          <input
            type="text"
            className="modal__item--input"
            value={percentile1}
            onChange={(e) =>
              setPercentile1(
                e.target.value > 100 ? percentile1 : e.target.value
              )
            }
          />
        </div>
        <div className="modal__item">
          <span className="modal__item--num">3</span>
          <p className="modal__item--txt">
            Update your <b>current score (out of 15)</b>
          </p>
          <input
            type="text"
            className="modal__item--input"
            value={score1}
            onChange={(e) =>
              setScore1(e.target.value > 15 ? score1 : e.target.value)
            }
            max="15"
          />
        </div>
        <div className="modal__bottom">
          <button className="btn btn-02" onClick={() => setModalStatus(false)}>
            Cancel
          </button>
          <button className="btn btn-03" onClick={() => Save()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
