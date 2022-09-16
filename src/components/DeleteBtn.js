import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteBtn({ id, handleDelete }) {
  const [isHover, setIsHover] = useState(false);
  const style = {
    deleteBtn: {
      cursor: "pointer",
      backgroundColor: isHover ? "grey" : "transparent",
      borderRadius: "50%",
      padding: "0.1vh",
    },
  };
  return (
    <DeleteIcon
      style={style.deleteBtn}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleDelete(id)}
    />
  );
}
