import { StylesConfig } from "react-select";
import { IOption } from "../../types";

export const CustomStyles = {
  control: () => ({
    display: "flex",
    alignItems: "center",
    background: "white",
    border: "none ",
    borderRadius: 30,
    paddingBlock: 12,
    paddingRight: 21,
    paddingLeft: 40,
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};
