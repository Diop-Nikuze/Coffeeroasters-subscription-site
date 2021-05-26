import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./components/pages/links/Navigation";

function App() {
  return (
    <ChakraProvider>
      <Navigation />
    </ChakraProvider>
  );
}

export default App;
