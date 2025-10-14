import "./Home.css";
import {useState} from "react";
import ConfContentCard from "../../component/ConfContentCard";
import { conferences } from "../../static/conferenceData";
import USAMap from "../../component/USAMap";
import { label } from "../../static/label";

export interface IConfData {
  name: string;
  city: string;
  state: string;
  date: Date[];
  img: string;
  link: string;
  description: string;
}

export default function Home(){
    const [selectedState, setSelectedState] = useState<string | null>("NY");
      const [hoveredState, setHoveredState] = useState<string>("");
    
      const handleStateClick = (state: string) => {
        if (selectedState !== state) {
          setSelectedState(state);
        }
      };
    
      const selectedConference = conferences.filter(
        (confData) => confData.state === selectedState
      );
    
      return (
        <>
          <div className="usaMapContainer">
            <h2>{label.home.hero_h2}</h2>
    
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