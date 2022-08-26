import styled from "styled-components";
import { Media } from "../../ui/media";

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 460px;
  padding-inline: 40px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  margin-top: 203px;
  margin-bottom: 45px;

  ${Media.MD} {
    font-size: 24px;
    line-height: 35px;
  }
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: rgba(117, 108, 108, 0.57);
  margin-bottom: 45px;

  ${Media.MD} {
    font-size: 24px;
    line-height: 28px;
  }
`;

const Total = styled.p`
  margin: 45px 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  align-self: flex-start;

  ${Media.SM} {
    font-size: 18px;
    line-height: 26px;
  }
`;

export { StyledForm, Title, SubTitle, Total };
