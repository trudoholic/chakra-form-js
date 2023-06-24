import HookForm from "./HookForm";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <HookForm />
      </Box>
    </ChakraProvider>
  );
}

export default App
