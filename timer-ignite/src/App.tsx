import { Button } from "./Components/Button";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/Theme/default";
import { GlobalStyled } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button bc="primary"/>
      <Button bc="secound"/>
      <Button bc="success"/>
      <Button bc="danger"/>

      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
