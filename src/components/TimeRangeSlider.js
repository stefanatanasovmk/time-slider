import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const ConfiguredSlider = styled(Slider)({
  color: "#f52c2c",
  height: 6,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 10,
    width: 10,
    backgroundColor: "#F52C2C",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 23,
    height: 23,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#f52c2c",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function TimeRangeSlider({ value, handleSliderChange }) {
  function handleChange(e, newValue) {
    handleSliderChange(newValue);
  }
  return (
    <div style={style.container}>
      <ConfiguredSlider
        value={value}
        onChange={handleChange}
        // style={{ width: "50%" }}
        marks
        valueLabelDisplay="on"
        getAriaLabel={() => "Time range"}
        step={1}
        min={0}
        max={24}
      />
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "100%",
  },
};
