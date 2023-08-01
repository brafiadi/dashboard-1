import { useState } from "react";
import { Grid, Paper, Title, Text, Flex, Stack, Group, Button } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import CardOne from "../components/dashboard/CardOne";
import CardTwo from "../components/dashboard/CardTwo";
import TableExample from "../components/dashboard/CardThree";

function Dashboard() {
  return (
    <Grid style={{ margin: 20 }}>
      <Grid.Col span={12} style={{ marginBottom: 20 }}>
        <Flex justify="space-between">
          <Stack spacing="xs">
            <Title order={1}>Dashboard</Title>
            <Text>January 1 - 30, 2023</Text>
          </Stack>
          <Group>
            <Button variant="light" color="gray">
              7 Days
            </Button>
            <Button variant="light" color="gray">
              1 Month
            </Button>
            <Button variant="light" color="gray">
              3 Months
            </Button>
            <Button variant="filled" color="yellow">
              1 Year
            </Button>
            <Button variant="light" color="gray">
              9 Jan 2023 - 7 Feb 2023
            </Button>
          </Group>
        </Flex>
      </Grid.Col>
      <Grid.Col span={8}>
        <Paper shadow="xs" p="md" style={{ height: "420px" }}>
          <CardOne />
        </Paper>
      </Grid.Col>
      <Grid.Col span={4}>
        <Paper shadow="xs" p="md">
          <CardTwo />
        </Paper>
      </Grid.Col>
      <Grid.Col span={12}>
        <Paper shadow="xs" p="md">
          <TableExample />
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
export default Dashboard;
