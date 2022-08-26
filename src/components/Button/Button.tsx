import React from "react";
import { StyledButton } from "./styles";

interface Iprops {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: Iprops) => {
  return (
    <StyledButton type="submit" disabled={isDisabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
