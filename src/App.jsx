import Modal from "./components/Modal/Modal";
import Analysis from "./components/Analysis/Analysis";
import AppBar from "./components/AppBar/AppBar";
import MainBody from "./components/MainBody/MainBody";
import SideBar from "./components/SideBar/SideBar";
import "/fonts/DMSans-Bold.ttf";
import "/fonts/DMSans-Medium.ttf";
import "/fonts/DMSans-Regular.ttf";
import { useState } from "react";

function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [score, setScore] = useState(7);

  const appBarProps = {
    orgLogoUrl: "https://cuvette.tech/app/static/media/logo.74bda650.svg",
    profileImageUrl: "/images/me-org.png",
    profileName: "Anurag-Tekale",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AppBar {...appBarProps} />
      <div style={{ display: "flex" }}>
        <SideBar />
        <MainBody
          setModalStatus={setModalStatus}
          rank={rank}
          percentile={percentile}
          score={score}
          modalStatus={modalStatus}
        />
        <Analysis score={score} />
      </div>
      {modalStatus && (
        <Modal
          setModalStatus={setModalStatus}
          rank={rank}
          percentile={percentile}
          score={score}
          setRank={setRank}
          setPercentile={setPercentile}
          setScore={setScore}
        ></Modal>
      )}
    </div>
  );
}

export default App;
