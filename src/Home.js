import { useEffect, useState } from "react";
import DailyBusySchedule from "./components/DailyBusySchedule";

export default function Home() {
  const [dates, setDates] = useState([]);
  useEffect(() => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + i);
      dates.push(tomorrow.toDateString());
    }
    setDates(dates);
  }, []);
  return (
    <div style={style.Container}>
      {dates.map((date) => {
        return <DailyBusySchedule key={date} date={date} />;
      })}
    </div>
  );
}

const style = {
  Container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
};
