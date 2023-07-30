import { useState } from "react";
import { AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, useMantineTheme } from "@mantine/core";
import { NavbarMenu } from "./NavbarMenu";
import Dashboard from "../pages/dashboard";

export default function Layout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      layout="alt"
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <NavbarMenu />
        </Navbar>
      }
    >
      <Dashboard />
    </AppShell>
  );
}
