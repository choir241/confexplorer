export interface IConfData {
  name: string;
  city: string;
  state: string;
  date: Date[];
  img: string;
  link: string;
  description: string;
}

export interface IUSAMapProps {
  hoveredState: string;
  setHoveredState: (state: string) => void;
  onStateClick: (state: string) => void;
  selectedState: string | null;
}
