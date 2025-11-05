import "./Home.css";
import { useState, useEffect } from "react";
import ConfContentCard from "../../component/ConfContentCard";
import { conferences } from "../../static/conferenceData";
import USAMap from "../../component/USAMap";
import { labels } from "../../static/labels";

export default function Home() {
  const [selectedState, setSelectedState] = useState<string | null>("NY");
  const [hoveredState, setHoveredState] = useState<string>("");

  const handleStateClick = (state: string) => {
    if (selectedState !== state) {
      setSelectedState(state);
    }
  };

  useEffect(() => {}, []);
  const selectedConference = conferences.filter(
    (confData) => confData.state === selectedState,
  );

  return (
    <>
      <div className="usaMapContainer">
        <h2>{labels.home.hero_h2}</h2>

        <section className="confMapContainer">
          <USAMap
            hoveredState={hoveredState}
            setHoveredState={setHoveredState}
            onStateClick={handleStateClick}
            selectedState={selectedState}
          />

          <ConfContentCard confContent={selectedConference[0]} />
        </section>
      </div>
    </>
  );
}
