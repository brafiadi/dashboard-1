import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import Layout from "./components/Layout";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout />
    </MantineProvider>
  );
}

export default App;
