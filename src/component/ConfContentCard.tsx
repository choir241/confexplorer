import { type IConfData } from "../App";

export default function ConfContentCard({
  confContent,
}: {
  confContent: IConfData;
}) {
  const confDates = confContent.date.map((date, i) => {
    if (i === 1) {
      return <>{`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}</>;
    } else {
      return (
        <>{`${date.getMonth()}/${date.getDay()}/${date.getFullYear()} - `}</>
      );
    }
  });

  return (
    <>
      {confContent.name ? (
        <section>
          <h2>{confContent.name}</h2>
          <time>
            {confContent.date.length > 1
              ? confDates
              : `${confContent.date[0].getMonth()}/${confContent.date[0].getDay()}/${confContent.date[0].getFullYear()}`}
          </time>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
