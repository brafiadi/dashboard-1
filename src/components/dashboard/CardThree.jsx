import { DataTable } from "mantine-datatable";
import { Avatar, Group, Stack, Title, Text, ThemeIcon } from "@mantine/core";
import { IconSquareFilled } from "@tabler/icons-react";

const examples = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  avatar: `https://i.pravatar.cc/50?img=${i + 1}`,
  user: `User ${Math.floor(Math.random() * 100)}`,
  position: Math.random() < 0.5 ? "Sales" : "Marketing",
  target: Math.floor(Math.random() * 5000) + 1000,
  status: Math.random() < 0.5 ? "completed" : "in progress",
  lastScanned: `${Math.floor(Math.random() * 60)} minutes ago`,
  scansPerHour: Math.floor(Math.random() * 20) + 5,
  lastSevenDays: Math.floor(Math.random() * 100) + 50,
}));

export default function TableExample() {
  return (
    <DataTable
      columns={[
        {
          accessor: "user",
          width: "40%",
          render: ({ avatar, user, position }) => (
            <Group>
              <ThemeIcon radius="md" color="gray.2" />
              <Avatar src={avatar} radius="md" />
              <Stack spacing={0}>
                <Title order={5}>{user}</Title>
                <Text c="dimmed">{position}</Text>
              </Stack>
            </Group>
          ),
        },
        { accessor: "target" },
        { accessor: "status" },
        { accessor: "lastScanned" },
        { accessor: "scansPerHour" },
        { accessor: "lastSevenDays" },
      ]}
      records={examples}
    />
  );
}
