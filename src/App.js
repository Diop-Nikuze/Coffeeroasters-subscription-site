import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./components/pages/links/Navigation";
import theme from "../src/theme/theme";
import "@fontsource/barlow/400.css";
import "@fontsource/fraunces/900.css";
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
    </ChakraProvider>
  );
}

export default App;
