import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function TextForm({ value, setValue, timeRange, onSubmit }) {
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }
  return (
    <TextField
      fullWidth
      color={"error"}
      value={value}
      placeholder={`From ${timeRange[0]} until ${timeRange[1]} I'll be...`}
      variant="outlined"
      onChange={handleChange}
      size={"small"}
      // helperText="Press enter to save"
      onKeyDown={handleSubmit}
      InputProps={{
        endAdornment: (
          <SendIcon color="error" onClick={onSubmit} style={style.SaveBtn} />
        ),
      }}
    />
  );
}
const style = {
  SaveBtn: {
    cursor: "pointer",
  },
};
