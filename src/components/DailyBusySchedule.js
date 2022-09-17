import TimeRangeSlider from "./TimeRangeSlider";
import { useState } from "react";
import TextForm from "./TextForm";
import EventsList from "./EventsList";
import { useDispatch } from "react-redux";
import { setSchedule } from "../redux/features/busyScheduleSlice";
import { v4 as uuidv4 } from "uuid";
import "./Style/DailyBusySchedule.css";

export default function DailyBusySchedule({ date }) {
  const dispatch = useDispatch();
  const [timeRange, setTimeRange] = useState([7, 23]);
  const [eventText, setEventText] = useState("");
  const [events, setEvents] = useState([]);

  function handleTextSubmit() {
    const newEvent = {
      id: uuidv4(),
      timeRange: timeRange,
      text: eventText,
      date: date,
    };
    setEvents((pre) =>
      [...pre, newEvent].sort((a, b) => a.timeRange[0] - b.timeRange[0])
    );
    setEventText("");
    dispatch(setSchedule(newEvent));
  }
  function handleSliderChange(newTimeRange) {
    setTimeRange(newTimeRange);
  }
  function handleDelete(id) {
    setEvents((pre) => pre.filter((event) => event.id !== id));
  }

  return (
    <div className="slider" style={style.Container}>
      <EventsList items={events} handleDelete={handleDelete} date={date} />
      <div style={style.SliderAndInputFormContainer}>
        <div style={style.SliderContainer}>
          <TimeRangeSlider
            value={timeRange}
            handleSliderChange={handleSliderChange}
          />
        </div>
        <div style={style.TextInputContainer}>
          <TextForm
            value={eventText}
            setValue={setEventText}
            timeRange={timeRange}
            onSubmit={handleTextSubmit}
          />
        </div>
      </div>
    </div>
  );
}

const style = {
  Container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#8da6b5",
    borderRadius: "10px",
    padding: "1vh",
    boxShadow: "1px 1px 4px 0px rgba(0,0,0,0.75)",
    marginBottom: "1vh",
  },
  SliderAndInputFormContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "50%",
    height: "90%",
    marginTop: "2vh",
  },
  SliderContainer: {
    flex: 2,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginTop: "8%",
  },
  TextInputContainer: {
    flex: 1,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "1vh",
  },
};
