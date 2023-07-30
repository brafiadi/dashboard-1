import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import Layout from "./components/Layout";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ fontFamily: "Inter, sans-serif" }}>
      <Layout />
    </MantineProvider>
  );
}

export default App;
