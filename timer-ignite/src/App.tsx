import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/Theme/default";
import { GlobalStyled } from "./styles/global";
import { BrowserRouter } from 'react-router'
import { Router } from "./Router";
import { ContextAPIProvider } from "./Components/ContextAPI/ContextAPI";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
      <ContextAPIProvider>
        <Router/>
      </ContextAPIProvider>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
