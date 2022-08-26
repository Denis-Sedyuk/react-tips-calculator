import styled from "styled-components";
import { Media } from "../../ui/media";

const StyledInput = styled.input`
  padding-block: 21px;
  text-align: center;
  max-width: 456px;
  border-radius: 30px;
  border: none;
  margin-bottom: 32px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${Media.MD} {
    margin-bottom: 17px;
  }

  ${Media.SM} {
    margin-bottom: 15px;
  }
`;

export { StyledInput };
