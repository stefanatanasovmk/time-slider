import { Typography } from "@mui/material";
import DeleteBtn from "./DeleteBtn";

export default function EventsList({ items, handleDelete }) {
  const style = {
    container: {
      // height: "50%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      backgroundColor: items.length ? "#dedede" : "transparent",
      borderRadius: "5px",
      padding: "1vh",
    },
    eventContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
  };

  return (
    <div style={style.container}>
      {items.map((item, index) => {
        return (
          <div key={index} style={style.eventContainer}>
            <Typography variant="subtitle2" color="text.secondary">
              {index + 1}. {item.text}; {item.timeRange[0]}h -{" "}
              {item.timeRange[1]}h
            </Typography>
            <DeleteBtn handleDelete={handleDelete} id={item.id} />
          </div>
        );
      })}
    </div>
  );
}
