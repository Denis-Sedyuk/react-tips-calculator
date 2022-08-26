import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2ed2c9;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  padding: 13px 0;
  color: #ffffff;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #0e8096;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export { StyledButton };
