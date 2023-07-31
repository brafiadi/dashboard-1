import React, { PureComponent } from "react";
import { Title, Flex, Stack, Group, Badge, Button } from "@mantine/core";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
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
];

const COLORS = ["#FB923C", "#5EEAD4", "#A78BFA", "#FFC700"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.22;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fontSize={12} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
    </g>
  );
};

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
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#fab005" labelLine={false} label={renderCustomizedLabel} activeShape={renderActiveShape}>
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} key={`cell-${index}`} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </>
    );
  }
}
