import { styled } from "styled-components";
import Flex from "../../styles/Flex";

export const StyledForm = styled.form`
  ${Flex}
  box-shadow: ${({ theme: { colors } }) => colors.cardTypeBoxShadow};
  background-color: ${({ theme: { colors } }) => colors.formBgColor};
  padding: 1.5rem;
  border: 0.1rem solid grey;
  border-radius: 0.5rem;
  text-align: center;
  @media (max-width: ${({ theme: { screens } }) => screens.xsm}) {
    padding: 1.5rem 0.5rem;
  }
`;

export const StyledHeader = styled.h2`
  font-size: 2.7rem;
  font-weight: 300;
  text-shadow: 0 2px grey;
  @media (max-width: ${({ theme: { screens } }) => screens.sm}) {
    font-size: 2rem;
  }
  @media (max-width: ${({ theme: { screens } }) => screens.xsm}) {
    font-size: 1.5rem;
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primaryButtonBgColor};
  color: ${({ theme: { colors } }) => colors.primaryTextColor};
  font-weight: 600;
  letter-spacing: 0.05rem;
  border-radius: 5px;
  border: 2px solid grey;
  ${({ $btnType }) => {
    if ($btnType === "search") {
      return "font-size: 1rem;padding: 0.3rem 1rem;";
    } else if ($btnType === "details") {
      return "font-size: 0.6rem;padding: 0.5rem;";
    }
  }};
`;

export const StyledTextInput = styled.input`
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 5px 0 0 5px;
  margin-right: 2px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  width: 60%;
  &:focus {
    outline: 0.1rem solid blue;
  }
`;

export const StyledSelection = styled.select`
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 0 5px 5px 0;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  width: 39%;
  &:focus {
    outline: 0.1rem solid blue;
  }
`;

export const FormElementContainer = styled.div`
  /* padding: 1rem; */
`;
