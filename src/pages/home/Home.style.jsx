import { styled } from "styled-components";
import Flex from "../../styles/Flex";

export const HomeContainer = styled.main`
  ${Flex}
  max-width: ${({ theme: { screens } }) => screens.lg};
  color: ${({ theme: { colors } }) => colors.primaryTextColor};
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;
  flex: 1;
  @media (max-width: ${({ theme: { screens } }) => screens.md}) {
    padding: 0.1rem;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 3rem 0;
`;