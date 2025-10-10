import USAMap from "./component/USAMap";
import { useState } from "react";
import "./App.css";
import ConfContentCard from "./component/ConfContentCard";
import { conferences } from "./static/conferenceData";

export interface IConfData {
  name: string;
  location: string;
  state: string;
  date: Date[];
  img: string;
  link: string;
  description: string;
}

export default function App() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string>("");

  const handleStateClick = (state: string) => {
    if (selectedState === state) {
      setSelectedState(null);
    } else {
      setSelectedState(state);
    }
  };

  const selectedConference = conferences.filter((confData)=>confData.state === selectedState);

  return (
    <>
      <div className="usaMapContainer">
        <h1>ConfExplorer</h1>
        <span>
          Wanna attend a tech conference, but don't know where to start? Start
          by exploring states near you in the map below!
        </span>


        <section className="confMapContainer">
        <USAMap
        hoveredState={hoveredState}
        setHoveredState={setHoveredState}
        onStateClick={handleStateClick} selectedState={selectedState} />
        
        <ConfContentCard
        confContent={selectedConference[0]}
        />

        </section>
      </div>
    </>
  );
}
