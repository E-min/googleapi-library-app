import { styled } from "styled-components";
import Flex from "../styles/Flex";

export const PageContainer = styled.main`
  ${Flex}
  max-width: ${({ theme: { screens } }) => screens.lg};
  color: ${({ theme: { colors } }) => colors.primaryTextColor};
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;
  flex: 1;
`;
export const InputItem = styled.section`
    
`
export const LoginForm = styled.form`
  ${Flex}
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme: { colors } }) => colors.formBgColor};
  box-shadow: ${({ theme: { colors } }) => colors.cardTypeBoxShadow};;
  border: 0.1rem solid grey;
  border-radius: 0.5rem;
`;
export const StyledInput = styled.input`
 background-color: ${({ theme: { colors } }) => colors.formBgColor};
 border: none;
 border-bottom: 0.1rem solid grey;
 padding: 0.5rem;
 width: 100%;
 &:focus {
   outline: none;
 }
`;
export const StyledSubmitButton = styled.button`
 border: none;
 padding: 0.5rem;
 font-size: 0.8rem;
 border-radius: 0.5rem;
 background-color: ${({ theme: { colors } }) => colors.formBgColor}
`;