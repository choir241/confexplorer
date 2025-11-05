import { LuCalendar } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { TfiNewWindow } from "react-icons/tfi";
import { months } from "../static/months";
import { labels } from "../static/labels";
import { type IConfData } from "../interfaces/Map";

export default function ConfContentCard({
  confContent,
}: {
  confContent: IConfData;
}) {
  const confDatesRange = confContent?.date.map((date, i) => {
    let confDates = "";
    if (i === 1 && date.getMonth() === confContent.date[0].getMonth()) {
      confDates += `${date.getDate()}, ${date.getFullYear()}`;
    } else if (i === 1 && date.getMonth() !== confContent.date[0].getMonth()) {
      confDates += `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    } else {
      confDates += `${months[date.getMonth()]} ${date.getDate()} - `;
    }
    return confDates;
  });

  return (
    <>
      {confContent ? (
        <section className="confContentCard">
          <h3>
            <a href={confContent.link}>
              {confContent.name}
              <TfiNewWindow className="pl-half" />
            </a>
          </h3>
          <div className="pb-1 flex items-center justify-between w-full">
            <span className="flex items-center pr-1">
              <FaLocationDot className="pr-half" />
              {confContent.city}
            </span>
            <time className="flex items-center pr-1">
              <LuCalendar className="pr-half" />
              {confContent.date.length > 1
                ? confDatesRange
                : `${
                    confContent.date[0].getMonth() + 1
                  }/${confContent.date[0].getDate()}/${confContent.date[0].getFullYear()}`}
            </time>
          </div>

          <img src={confContent.img} />

          <p>{confContent.description}</p>
          <button className="button">{labels.confContent.button}</button>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
