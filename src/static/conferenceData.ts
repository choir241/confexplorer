import ReactMiamiImg from "../../assets/react_miami.png";
import RenderATLImg from "../../assets/render_atl.jpg";
import EpicWebDevImg from "../../assets/epic_web_dev.jpeg";
import THATConfImg from "../../assets/THAT_Conf.jpg";
import AllThingsOpenImg from "../../assets/all_things_open.jpg";
import CommitYourCodeImg from "../../assets/commit_your_code.jpg";
import DroidConFlutterConImg from "../../assets/droidcon_fluttercon.jpg";

export const conferences = [
  {
    name: "THAT conference",
    city: "Wisconsin Dells",
    state: "WI",
    date: [new Date("2024, 07, 30"), new Date("2024, 08, 01")], // July 30th - August 1st, 2024
    img: THATConfImg,
    link: "https://thatconference.com/",
    description: "Currently on hiatus for a tentative amount of time.",
  },
  {
    name: "Droidcon & Fluttercon",
    city: "Queens",
    state: "NY",
    date: [new Date("2024, 09, 19"), new Date("2024, 09, 20")], // Sept 19th - 20th, 2024
    img: DroidConFlutterConImg,
    link: "https://www.flutterconusa.dev/",
    description:
      "The world's premiere global event for all things involving flutter and android development.",
  },
  {
    name: "All Things Open",
    city: "Raleigh",
    state: "NC",
    date: [new Date("2024, 10, 27"), new Date("2024, 10, 29")], // Oct 27th - 29th, 2024
    img: AllThingsOpenImg,
    link: "https://2025.allthingsopen.org/",
    description:
      "The largest open source, tech, and/or web conference in the east coast.",
  },
  {
    name: "Epic Web Dev",
    city: "Salt Lake City",
    state: "UT",
    date: [new Date("2025, 03, 26")], // Mar 26th, 2025
    img: EpicWebDevImg,
    link: "https://www.epicweb.dev/conf/2025",
    description:
      "Join other full stack devs from all around the world to collaborate on present and future state of the art of building the best user/dev experience possible.",
  },
  {
    name: "React Miami",
    city: "Miami",
    state: "FL",
    date: [new Date("2025, 04, 17"), new Date("2025, 04, 18")], // Apr 12th - 18th, 2025
    img: ReactMiamiImg,
    link: "https://www.reactmiami.com/",
    description:
      "Explore the latest in the React ecosystem with 500 similar-minded devs while soaking in the Miami sunny rays!",
  },
  {
    name: "Render ATL",
    city: "Atlanta",
    state: "GA",
    date: [new Date("2025, 06, 11"), new Date("2025, 06, 13")], // Jun 11th - 13th, 2025
    img: RenderATLImg,
    link: "https://www.renderatl.com/",
    description:
      "Fun carnival and amazing opportunities at RenderATL for tech professionals to sharpen your skills!",
  },
  {
    name: "Commit Your Code",
    city: "Dallas",
    state: "TX",
    date: [new Date("2025, 09, 25"), new Date("2025, 09, 26")], // Sept 25th - 26th, 2025
    img: CommitYourCodeImg,
    link: "https://www.commityourcode.com/",
    description:
      "A conference that focuses on giving back to the community, where all the ticket sales go to charity.",
  },
];
