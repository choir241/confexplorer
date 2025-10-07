import { USAMap, type USAStateAbbreviation } from "@mirawision/usa-map-react";
import { conferences } from "./static/conferenceData";

export default function App() {

  const handleStateClick = (stateAbbreviation: USAStateAbbreviation) => {
    console.log(`You clicked on ${stateAbbreviation}`);
    const selectedStateConf = conferences.filter(confData=>confData.state === stateAbbreviation)
    alert(selectedStateConf[0].name);
  };

  const customStates = {
    WI: {
      fill: "teal",
      onClick: handleStateClick,
    },
    NY: {
      fill: "#e12885",
      onClick: handleStateClick,
    },
    NC: {
      fill: "#b81c0b",
      onClick: handleStateClick,
    },
    TX: {
      fill: "blue",
      onClick: handleStateClick,
    },
    UT: {
      fill: "purple",
      onClick: handleStateClick
    },
    FL: {
      fill: "lightblue",
      onClick: handleStateClick
    },
    GA: {
      fill: "orange",
      onClick: handleStateClick
    }
  };
  return <USAMap customStates={customStates}/>;
}
