import { USAMap, type USAStateAbbreviation } from "@mirawision/usa-map-react";
import { conferences } from "./static/conferenceData";
import "./App.css";
import { useState, useMemo } from "react";
import ConfContentCard from "./component/confContentCard";

export interface IConfData {
  name: string;
  location: string;
  state: string;
  date: Date[];
}

export default function App() {
  const [currHoverState, setCurrHoverState] = useState("");
  const [currConf, setCurrConf] = useState<IConfData>({
    name: "",
    location: "",
    date: [new Date()],
    state: "",
  });

  const handleStateClick = (stateAbbreviation: USAStateAbbreviation) => {
    const selectedStateConf = conferences.filter(
      (confData) => confData.state === stateAbbreviation,
    );
    if (selectedStateConf.length > 1) {
      setCurrConf(selectedStateConf[0]);
    } else if (selectedStateConf.length === 1) {
      setCurrConf(selectedStateConf[0]);
    }
  };

  type StateKey = "WI" | "NY" | "NC" | "TX" | "UT" | "FL" | "GA";

  const myConfStates: StateKey[] = ["WI", "NY", "NC", "TX", "UT", "FL", "GA"];

  const customStates = useMemo(() => {
    let fill = null;
    let stroke = null;

    interface ILabel {
      enabled: boolean;
    }

    const states: Partial<
      Record<
        StateKey,
        {
          onHover: (e: string) => void;
          onClick: (stateAbbreviation: USAStateAbbreviation) => void;
          fill: string;
          stroke: string;
          label: ILabel;
        }
      >
    > = {};

    myConfStates.forEach((state: StateKey) => {
      if (currHoverState === state) {
        fill = "#bec8d1";
        stroke = "#860043ff";
      } else {
        fill = "#137a7f";
        stroke = "";
      }

      states[state] = {
        onHover: () => setCurrHoverState(state),
        onClick: handleStateClick,
        stroke: stroke,
        fill: fill,
        label: {
          enabled: false,
        },
      };
    });

    return states;
  }, [currHoverState]);

  return (
    <>
      <div className="usaMapContainer">
        <h1>ConfExplorer</h1>
        <span>
          Wanna attend a tech conference, but don't know where to start? Start
          by exploring states near you in the map below!
        </span>

        {myConfStates.map((state) => {
          return (
            <button
              onClick={() => handleStateClick(state)}
              className={`state ${state}`}
            >
              {state}
            </button>
          );
        })}

        <USAMap customStates={customStates} />

        <ConfContentCard confContent={currConf} />
      </div>
    </>
  );
}
