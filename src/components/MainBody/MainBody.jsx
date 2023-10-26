import React, { useEffect } from "react";
import TestModal from "../TestModal/TestModal";
import Statistics from "../Statistics/Statistics";
import Comparison from "../Comparison/Comparison";

const MainBody = ({setModalStatus, rank, percentile, score, modalStatus}) => {
  return (
    <div className="main-body">
      <TestModal setModalStatus={setModalStatus}/>
      <Statistics rank={rank} percentile={percentile} score={score}></Statistics>
      <Comparison percentile={percentile} modalStatus={modalStatus}></Comparison>
    </div>
  );
};

export default MainBody;
