import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface Iprops {
  placeholder: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, type, onChange }: Iprops) => {
  return (
    <>
      <StyledInput placeholder={placeholder} type={type} onChange={onChange} />
    </>
  );
};
