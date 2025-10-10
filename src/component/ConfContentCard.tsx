import { type IConfData } from "../App";
import { LuCalendar } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { TfiNewWindow } from "react-icons/tfi";

export default function ConfContentCard({
  confContent,
}: {
  confContent: IConfData;
}) {

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const confDatesRange = confContent?.date.map((date, i) => {
    let confDates = ""
    if (i === 1) {
      confDates += `${date.getDate()}, ${date.getFullYear()}`;
    } else {
      confDates += `${months[date.getMonth()]} ${date.getDate()} - `
    }
    return confDates;
  });

  return (
    <>
      {confContent ? (
        <section className="confContentCard">
          <h2>{confContent.name}</h2>
          <div className="pb-1 flex items-center w-full">
          <span className="flex items-center pr-1"><FaLocationDot className="pr-half"/>{confContent.location}</span>
          <time className="flex items-center">
            <LuCalendar className="pr-half"/>
            {confContent.date.length > 1
              ? confDatesRange
              : `${confContent.date[0].getMonth()+1}/${confContent.date[0].getDate()}/${confContent.date[0].getFullYear()}`}
          </time>
          </div>

              <img src = {confContent.img}/>

              <p>{confContent.description}</p>
              <button className="button">Learn more</button>

              <a href = {confContent.link}>Conference Link <TfiNewWindow/></a>
              
        </section>
      ) : (
        ""
      )}
    </>
  );
}
