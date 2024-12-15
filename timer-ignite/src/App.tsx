import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/Theme/default";
import { GlobalStyled } from "./styles/global";
import { BrowserRouter } from 'react-router'
import { Router } from "./Router";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
