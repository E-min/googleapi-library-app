import { ThemeProvider } from "styled-components";
import AppRouter from "./routers/AppRouter";
import GlobalStyles from "./styles/Global.styles";
import { lightTheme, darkTheme } from "./styles/theme";
import AuthContextProvider from "./context/AuthContext";
import BooksContextProvider from "./context/BooksContext";
import { useThemeContext } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { themeMode } = useThemeContext();

  return (
    <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AuthContextProvider>
        <BooksContextProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </BooksContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
