import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { RootContainer, ThemeMode } from "./Layout.style";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useThemeContext } from "../../context/ThemeContext";

const Layout = () => {
  const { themeMode, setThemeMode } = useThemeContext();

  const handleTheme = () => {
    if (themeMode) {
      setThemeMode(false);
    } else {
      setThemeMode(true);
    }
  };

  return (
    <RootContainer data-flex={"center  column 1rem"}>
      <Navbar />
      <Outlet />
      <Footer />
      <ThemeMode onClick={handleTheme} $currentTheme={themeMode}>
        {themeMode ? <BsFillMoonFill /> : <BsFillSunFill />}
      </ThemeMode>
    </RootContainer>
  );
};

export default Layout;
