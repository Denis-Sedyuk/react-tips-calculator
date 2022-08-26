import React from "react";
import Select, { SingleValue } from "react-select";
import { IOption } from "../../types";
import { CustomStyles } from "./styles";

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface IProps {
  tips: number;
  setTips: (tips: number) => void;
}

export const CustomSelect = ({ setTips, tips }: IProps) => {
  const getTips = () =>
    options.find((option) => {
      return option.value === tips;
    });

  const handleChange = (option: SingleValue<IOption>) => {
    if (option) setTips(option.value);
  };

  return (
    <Select
      options={options}
      styles={CustomStyles}
      value={getTips()}
      onChange={handleChange}
    />
  );
};
