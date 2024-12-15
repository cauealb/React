import { Button } from "./Components/Button";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./Theme/default";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button bc="primary"/>
      <Button bc="secound"/>
      <Button bc="success"/>
      <Button bc="danger"/>
    </ThemeProvider>
  )
}

export default App
