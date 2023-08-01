import React, { PureComponent } from "react";
import { Title, Flex, Stack, Group, Badge, Button } from "@mantine/core";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { IconChevronUp } from "@tabler/icons-react";

const data = [
  {
    name: "JAN",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "FEB",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "MAR",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "APR",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "MAY",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "JUN",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "JUL",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "AUG",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "SEP",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "OCT",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "NOV",
    scans: Math.floor(Math.random() * 10000),
  },
  {
    name: "DEC",
    scans: Math.floor(Math.random() * 10000),
  },
];

export default class CardOne extends PureComponent {
  render() {
    return (
      <>
        <Flex justify="space-between">
          <Group>
            <Stack spacing="0">
              <Title order={6} c="dimmed">
                Activity
              </Title>
              <Title order={4} style={{ marginBottom: "20px" }}>
                Online Scans
              </Title>
            </Stack>
            <Title order={1} style={{ marginLeft: "auto" }}>
              635
            </Title>
            <Badge color="yellow">
              <IconChevronUp size={12} />
              21.01%
            </Badge>
          </Group>
          <Group>
            <Button variant="white" color="gray.6">
              2020
            </Button>
            <Button variant="white" color="gray.6">
              2021
            </Button>
            <Button variant="light" color="gray.6">
              Month
            </Button>
          </Group>
        </Flex>

        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            width={200}
            height={100}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} axisLine={false} tick={{ fill: "gray", fontSize: "14" }} tickLine={false} />
            <YAxis axisLine={false} tick={{ fill: "gray", fontSize: "14" }} tickLine={false} />
            <Tooltip />
            <Line type="linear" dataKey="scans" stroke="#FFBF00" activeDot={{ r: 8 }} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}
