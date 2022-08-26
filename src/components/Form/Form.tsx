import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { StyledForm, Title, SubTitle, Total } from "./styles";
import { Button } from "../Button/Button";
import { CustomSelect, options } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { useInput } from "../../hooks/useInput";

export const Form = () => {
  const bill = useInput("");
  const persons = useInput("");
  const [tips, setTips] = useState<number>(options[0].value);
  const [result, setResult] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleTotal = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const result = +bill.value * +persons.value * (tips / 100);
    setResult(result);
  };

  useEffect((): void => {
    if (bill.value && persons.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleTotal}>
      <Title>Welcome to App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <Input type="number" placeholder="Enter Bill" {...bill} />
      <Input type="number" placeholder="Enter persons" {...persons} />
      <CustomSelect tips={tips} setTips={setTips} />
      <Total>Total: {result.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
