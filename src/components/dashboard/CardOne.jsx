import React, { PureComponent } from "react";
import { Title } from "@mantine/core";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
        <Title order={6} c="dimmed">
          Activity
        </Title>
        <Title order={4} style={{ marginBottom: "20px" }}>
          Online Scans
        </Title>
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="scans" stroke="#FFBF00" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}
