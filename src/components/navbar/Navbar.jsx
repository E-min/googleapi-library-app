import {
  StyledNavLink,
  StyledNavbar,
  StyledBrand,
  StyledUl,
  StyledLi,
  Container,
  CollapseNavbar,
  StyledMenu,
} from "./Navbar.style";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const [collapse, setCollapse] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  const menuStyles = {
    maxHeight: collapse ? "" : "3.4rem",
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <Container>
      <StyledNavbar style={menuStyles} data-flex={"space-between center"}>
        <CollapseNavbar data-flex={"space-between center"}>
          <StyledBrand>LIBRARY APP</StyledBrand>
          <StyledMenu onClick={handleCollapse} />
        </CollapseNavbar>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to="/">Home</StyledNavLink>
          </StyledLi>
          {user ? (
            <StyledLi>
              <StyledNavLink logout="." onClick={handleLogout}>
                Logout
              </StyledNavLink>
            </StyledLi>
          ) : (
            <>
              <StyledLi>
                <StyledNavLink login="." to="/login">
                  LogIn
                </StyledNavLink>
              </StyledLi>
              <StyledLi>
                <StyledNavLink register="." to="/register">
                  Register
                </StyledNavLink>
              </StyledLi>
            </>
          )}
        </StyledUl>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
