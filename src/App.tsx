import USAMap from "./component/USAMap";
import { useState } from "react";
import "./App.css";

export interface IConfData {
  name: string;
  location: string;
  state: string;
  date: Date[];
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

  return (
    <>
      <div className="usaMapContainer">
        <h1>ConfExplorer</h1>
        <span>
          Wanna attend a tech conference, but don't know where to start? Start
          by exploring states near you in the map below!
        </span>
        <USAMap onStateClick={handleStateClick} selectedState={selectedState} />
      </div>
    </>
  );
}
