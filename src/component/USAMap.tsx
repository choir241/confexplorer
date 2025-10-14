import { useEffect, useRef } from "react";
import {
  StateAbbreviations,
  USAMap as USAMapLib,
  type USAStateAbbreviation,
} from "@mirawision/usa-map-react";
import { statesWithConferences } from "../static/statesWithConferences";

interface USAMapProps {
  hoveredState: string;
  setHoveredState: (state: string) => void;
  onStateClick: (state: string) => void;
  selectedState: string | null;
}

export default function USAMap({
  onStateClick,
  selectedState,
  hoveredState,
  setHoveredState,
}: USAMapProps) {
  const usaMapTabbingKeyboardContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!usaMapTabbingKeyboardContainer.current) return;

    const usaSvg = usaMapTabbingKeyboardContainer.current.querySelector("svg");
    if (!usaSvg) return;

    const usaStateSvgPaths = usaSvg.querySelectorAll("path");

    usaStateSvgPaths.forEach((usaStateSvgPath) => {
      const stateName = usaStateSvgPath.getAttribute("data-name");
      if (!stateName) return;

      const is_clickable = statesWithConferences.includes(stateName);

      if (is_clickable) {
        usaStateSvgPath.setAttribute("tabindex", "0");
        usaStateSvgPath.setAttribute("role", "button");
        usaStateSvgPath.setAttribute(
          "aria-label",
          `View conferences in ${stateName}`
        );

        if (selectedState === stateName) {
          usaStateSvgPath.setAttribute("aria-pressed", "true");
        } else {
          usaStateSvgPath.setAttribute("aria-pressed", "false");
        }

        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onStateClick(stateName);
          }
        };

        usaStateSvgPath.addEventListener("keydown", handleKeyDown);

        return () => {
          usaStateSvgPath.removeEventListener("keydown", handleKeyDown);
        };
      } else {
        usaStateSvgPath.setAttribute("tabindex", "-1");
      }
    });
  }, [selectedState, statesWithConferences, onStateClick]);

  const handleStateClick = (stateAbbreviation: USAStateAbbreviation) => {
    if (statesWithConferences.includes(stateAbbreviation)) {
      onStateClick(stateAbbreviation);
    }
  };

  const customStates = () => {
    const config: Record<
      string,
      {
        fill: string;
        stroke?: string;
        onClick?: (state: USAStateAbbreviation) => void;
        onHover: (state: USAStateAbbreviation) => void;
      }
    > = {};

    StateAbbreviations.forEach((state) => {
      let fill = "";

      if (selectedState === state) {
        fill = "#137a7f";
      } else if (hoveredState === state) {
        fill = "#469a9fff";
      } else if (statesWithConferences.includes(state)) {
        fill = "#bec8d1";
      } else {
        fill = "rgba(229, 236, 233, 1)";
      }

      config[state] = {
        onHover: () => setHoveredState(state),
        fill,
        onClick: handleStateClick,
      };
    });

    return config;
  };

  return (
    <div ref={usaMapTabbingKeyboardContainer}>
      <USAMapLib customStates={customStates()} />
    </div>
  );
}
