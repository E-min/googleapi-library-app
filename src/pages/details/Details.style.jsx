import { styled } from "styled-components";
import Flex from "../../styles/Flex";

export const Page = styled.section`
  text-align: center;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 2px solid grey;
  color: ${({ theme: { colors } }) => colors.primaryTextColor};
  box-shadow: ${({ theme: { colors } }) => colors.cardTypeBoxShadow};
  @media (max-width: ${({ theme: { screens } }) => screens.sm}) {
    padding: 2rem 0.5rem;
    font-size: 0.9rem;
  }
`;
export const DetailsContainer = styled.main`
  ${Flex}
  max-width: ${({ theme: { screens } }) => screens.lg};
  width: 100%;
  margin: 0 auto;
  padding: 4rem 1rem;
  flex: 1;
  @media (max-width: ${({ theme: { screens } }) => screens.sm}) {
    padding: 2rem 0;
  }
`;
