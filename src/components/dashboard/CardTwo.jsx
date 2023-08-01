import React, { PureComponent } from "react";
import { Title, Flex, Stack, Group, Badge, Button } from "@mantine/core";
import { Legend, PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import { IconChevronUp } from "@tabler/icons-react";

const data = [
  {
    name: "Target 1",
    value: Math.floor(Math.random() * 10000),
  },
  {
    name: "Target 2",
    value: Math.floor(Math.random() * 10000),
  },
  {
    name: "Target 3",
    value: Math.floor(Math.random() * 10000),
  },
  {
    name: "Target 4",
    value: Math.floor(Math.random() * 10000),
  },
];

const COLORS = ["#FB923C", "#5EEAD4", "#A78BFA", "#FFC700"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fontSize={14} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderColorfulLegendText = (value, entry) => {
  return <span style={{ color: "#596579", fontWeight: 500, fontSize: 12 }}>{value}</span>;
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
  const avg = Math.floor(Math.random() * 100);
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} fontSize={28} fontWeight="700" textAnchor="middle" fill="#000000">
        {avg}
      </text>
      <text x={cx} y={cy + 10} dy={8} fontSize={14} fontWeight="400" textAnchor="middle" fill="#000000">
        Average range
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius + 5} outerRadius={outerRadius + 5} startAngle={startAngle} endAngle={endAngle} fill={fill} />
    </g>
  );
};

export default class CardTwo extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };
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
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="40%"
              innerRadius={60}
              outerRadius={100}
              fill="#fab005"
              labelLine={false}
              label={renderCustomizedLabel}
              paddingAngle={5}
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={this.onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} key={`cell-${index}`} />
              ))}
            </Pie>
            <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" iconSize={8} formatter={renderColorfulLegendText} />
          </PieChart>
        </ResponsiveContainer>
      </>
    );
  }
}
