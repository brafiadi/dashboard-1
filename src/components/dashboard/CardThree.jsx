import { DataTable } from "mantine-datatable";
import { Avatar, Badge, Group, Stack, Title, Text, ThemeIcon, createStyles } from "@mantine/core";
import { IconSquareFilled } from "@tabler/icons-react";

const examples = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  avatar: `https://i.pravatar.cc/50?img=${i + 1}`,
  user: `User ${Math.floor(Math.random() * 100)}`,
  position: Math.random() < 0.5 ? "Sales" : "Marketing",
  target: Math.floor(Math.random() * 5000) + 1000,
  status: Math.random() < 0.5 ? "Completed" : "In process",
  lastScanned: `${Math.floor(Math.random() * 60)} minutes ago`,
  scansPerHour: Math.floor(Math.random() * 20) + 5,
  lastSevenDays: Math.floor(Math.random() * 100) + 50,
}));

const useStyles = createStyles((theme) => ({
  header: {
    "&& th": { color: theme.colors.gray[5] },
  },
}));

export default function TableExample() {
  const { classes } = useStyles();
  return (
    <DataTable
      className={classes.header}
      columns={[
        {
          accessor: "user",
          width: "50%",
          render: ({ avatar, user, position }) => (
            <Group>
              <ThemeIcon radius="md" color="gray.2" />
              <Avatar src={avatar} radius="md" />
              <Stack spacing={0}>
                <Title order={5} color="gray.8">
                  {user}
                </Title>
                <Text c="dimmed">{position}</Text>
              </Stack>
            </Group>
          ),
        },
        {
          accessor: "target",
          render: ({ target }) => (
            <>
              <Text fz="md" fw="600" color="gray.7">
                {target}
              </Text>
            </>
          ),
        },
        { accessor: "status", render: ({ status }) => <Badge color={status === "Completed" ? "green" : "blue"}>{status}</Badge> },
        { accessor: "lastScanned" },
        { accessor: "scansPerHour" },
        { accessor: "lastSevenDays" },
      ]}
      records={examples}
    />
  );
}
