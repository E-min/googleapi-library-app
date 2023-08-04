import { styled } from "styled-components";
import Flex from "../../styles/Flex";

export const StyledCard = styled.div`
  ${Flex}
  position: relative;
  text-align: center;
  overflow: hidden;
  width: 10rem;
  border: 0.1rem solid grey;
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  box-shadow: ${({ theme: { colors } }) => colors.cardTypeBoxShadow};
  background-color: ${({ theme: { colors } }) => colors.formBgColor};
  @media (max-width: ${({ theme: { screens } }) => screens.xsm}) {
    width: 90%;
  }
`;
export const StyledCardHeader = styled.p`
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  color: ${({ theme: { colors } }) => colors.primaryTextColor};
  &:hover {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.5rem;
    border: 1px solid grey;
  }
`;
export const BookCover = styled.img`
  margin-top: 2rem;
  width: 100%;
  height: 10rem;
  border: 1px solid grey;
`;
