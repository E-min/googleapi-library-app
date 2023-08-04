import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Flex from "../../styles/Flex";
import { BiMenu } from "react-icons/bi";

export const StyledNavbar = styled.nav`
  ${Flex}
  max-width: ${({ theme: { screens } }) => screens.lg};
  margin: 0 auto;
  padding: 0 1rem;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: ${({ theme: { screens } }) => screens.md}) {
    overflow: hidden;
    flex-direction: column;
    padding: 0;
  }
`;
export const CollapseNavbar = styled.div`
  @media (max-width: ${({ theme: { screens } }) => screens.md}) {
    ${Flex}
    width: 100%;
    border-bottom: 2px solid grey;
    padding: 0 1rem;
  }
`;
export const StyledMenu = styled(BiMenu)`
  display: none;
  @media (max-width: ${({ theme: { screens } }) => screens.md}) {
    display: block;
    font-size: 2rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.12);
      border-radius: 5px;
    }
  }
`;
export const StyledBrand = styled.h1`
  font-size: 1rem;
  padding: 1rem 0;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  padding: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    text-decoration: underline;
  }
  ${({ logout, login, register, theme }) => {
    const active = `&.active {
    // background-color: ${theme.colors.primaryColor};
    box-shadow: 0 3px 0 0 ${theme.colors.navbarBoxShadowColor};
    }`;
    if (logout) {
      return "color: crimson;";
    } else if (login) {
      return "color: blue;" + active;
    } else if (register) {
      return "color: orange;" + active;
    } else {
      return `color: ${theme.colors.navItemColor};` + active;
    }
  }}
  @media (max-width: ${({ theme: { screens } }) => screens.md}) {
    width: 100%;
    display: inline-block;
    &.active {
      box-shadow: -5px 0 0 0 inset
        ${({ theme: { colors } }) => colors.navbarBoxShadowColor};
    }
  }
`;
export const StyledUl = styled.ul`
  list-style-type: none;
  @media (max-width: ${({ theme: { screens } }) => screens.md}) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const StyledLi = styled.li`
  display: inline-block;
  @media (max-width: ${({ theme: { screens } }) => screens.md}) {
   width: 100%;]
  }
`;
export const Container = styled.header`
  box-shadow: 0px 0px 2px 0px
    ${({ theme: { colors } }) => colors.navbarBoxShadowColor};
  background-color: ${({ theme: { colors } }) => colors.navbarBgColor};
`;
