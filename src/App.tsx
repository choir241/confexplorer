import { USAMap, type USAStateAbbreviation } from "@mirawision/usa-map-react";
import { conferences } from "./static/conferenceData";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [currentConfData, setCurrentConfData] = useState();
  const [currHoverState, setCurrHoverState] = useState("");

  const handleStateClick = (stateAbbreviation: USAStateAbbreviation) => {
    const selectedStateConf = conferences.filter(
      (confData) => confData.state === stateAbbreviation
    );
    if (selectedStateConf.length > 1) {
      selectedStateConf.forEach((conf) => {
        alert(conf.name);
      });
    } else if (selectedStateConf.length === 1) {
      alert(selectedStateConf[0].name);
    }
  };

  const customStates = () => {
    type StateKey = "WI" | "NY" | "NC" | "TX" | "UT" | "FL" | "GA";

    const myConfStates: StateKey[] = ["WI", "NY", "NC", "TX", "UT", "FL", "GA"];

    const states: Partial<
      Record<
        StateKey,
        {
          onClick: (stateAbbreviation: USAStateAbbreviation) => void;
          fill: string;
        }
      >
    > = {};

    myConfStates.forEach((state: StateKey) => {
      states[state] = {
        onClick: handleStateClick,
        fill: "teal",
      };
    });

    return states;
  };

  console.log(customStates);
  return (
    <>
      <div className="usaMapContainer">
        <h1>ConfExplorer</h1>
        <span>
          Wanna attend a tech conference, but don't know where to start? Start
          by exploring states near you in the map below!
        </span>
        <button className="state texas">TX</button>
        <button className="state newYork">NY</button>
        <button className="state utah">UT</button>
        <button className="state wisconsin">WI</button>
        <button className="state northCarolina">NC</button>
        <button className="state georgia">GA</button>
        <button className="state florida">FL</button>
        <USAMap customStates={customStates()} />
      </div>
    </>
  );
}
