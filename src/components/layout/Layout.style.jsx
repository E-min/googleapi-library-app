import { styled } from "styled-components";
import Flex from "../../styles/Flex";

export const RootContainer = styled.div`
  ${Flex}
  position: relative;
  min-height: 100vh;
`;
export const ThemeMode = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-size: 2rem;
  color: ${({ $currentTheme }) => ($currentTheme ? "darkblue" : "orange")};
`;
