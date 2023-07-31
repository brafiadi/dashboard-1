import React, { PureComponent } from "react";
import { Title, Flex, Stack, Group, Badge, Button } from "@mantine/core";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { IconChevronUp } from "@tabler/icons-react";

const data = [
  {
    name: "Group A",
    value: Math.floor(Math.random() * 10000),
  },
  {
    name: "Group B",
    value: Math.floor(Math.random() * 10000),
  },
  {
    name: "Group C",
    value: Math.floor(Math.random() * 10000),
  },
  {
    name: "Group D",
    value: Math.floor(Math.random() * 10000),
  },
  {
    name: "Group E",
    value: Math.floor(Math.random() * 10000),
  },
  {
    name: "Group F",
    value: Math.floor(Math.random() * 10000),
  },
];

export default class CardTwo extends PureComponent {
  render() {
    return (
      <>
        <Flex justify="space-between">
          <Group>
            <Stack spacing="xs">
              <Title order={6} c="dimmed">
                Statistics
              </Title>
              <Title order={4} style={{ marginBottom: "20px" }}>
                Scans per target
              </Title>
            </Stack>
          </Group>
        </Flex>
        <ResponsiveContainer width="100%" height={310}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
          </PieChart>
        </ResponsiveContainer>
      </>
    );
  }
}
