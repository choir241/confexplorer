import { USAMap, type USAStateAbbreviation } from "@mirawision/usa-map-react";

export default function App() {

  const handleStateClick = (stateAbbreviation: USAStateAbbreviation) => {
    console.log(`You clicked on ${stateAbbreviation}`);
  };

  const customStates = {
    CA: {
      onClick: handleStateClick,
    },
    TX: {
      onClick: handleStateClick,
    },
  };
  return <USAMap customStates={customStates} />;
}
