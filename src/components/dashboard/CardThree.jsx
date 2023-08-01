import React from "react";
import { Sparklines, SparklinesLine, SparklinesCurve } from "react-sparklines";
import { DataTable } from "mantine-datatable";
import { Avatar, Button, Badge, Flex, Group, Stack, Title, Text, TextInput, ThemeIcon, createStyles, Center } from "@mantine/core";
import { IconUpload, IconFilter, IconSearch } from "@tabler/icons-react";

const examples = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  avatar: `https://i.pravatar.cc/50?img=${i + 1}`,
  user: `User ${Math.floor(Math.random() * 100)}`,
  position: Math.random() < 0.5 ? "Sales" : "Marketing",
  target: Math.floor(Math.random() * 5000) + 1000,
  status: Math.random() < 0.33 ? "Completed" : Math.random() < 0.66 ? "In process" : Math.random() < 0.83 ? "On hold" : "In active",
  lastScanned: `${Math.floor(Math.random() * 60)} minutes ago`,
  scansPerHour: Math.floor(Math.random() * 20) + 5,
  lastSevenDays: [
    Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
    Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
    Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
    Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
    Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
    Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
    Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? -1 : 1),
  ],
}));

const useStyles = createStyles((theme) => ({
  header: {
    "&& th": { color: theme.colors.gray[5] },
  },
}));

export default function TableExample() {
  const { classes } = useStyles();
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <>
      <Flex justify="space-between">
        <Group>
          <Stack spacing="0">
            <Title order={6} c="dimmed">
              Best Performing
            </Title>
            <Title order={4} style={{ marginBottom: "20px" }}>
              100 Users in the past 7 days
            </Title>
          </Stack>
        </Group>
        <Group>
          <Button leftIcon={<IconFilter size="1.2rem" />} variant="outline" color="gray.4">
            Filters
          </Button>
          <TextInput m="0" p="0" placeholder="Search" icon={<IconSearch size="0.9rem" stroke={1.5} />} />
          <Button leftIcon={<IconUpload size="1.2rem" />} variant="filled" color="yellow">
            Export
          </Button>
        </Group>
      </Flex>
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
                  <Title order={5} color="gray.7">
                    {user}
                  </Title>
                  <Text c="dimmed">{position}</Text>
                </Stack>
              </Group>
            ),
          },
          {
            accessor: "target",
            textAlignment: "center",
            render: ({ target }) => (
              <Text fz="md" fw="600" color="gray.7">
                {target}
              </Text>
            ),
          },
          { accessor: "status", textAlignment: "center", render: ({ status }) => <Badge color={status === "Completed" ? "green" : status === "In process" ? "blue" : status === "On hold" ? "yellow" : "red"}>{status}</Badge> },
          {
            accessor: "lastScanned",
            textAlignment: "center",
            render: ({ lastScanned }) => (
              <Text fz="md" fw="600" color="gray.7">
                {lastScanned}
              </Text>
            ),
          },
          {
            accessor: "scansPerHour",
            textAlignment: "center",
            render: ({ scansPerHour }) => (
              <Text fz="md" fw="600" color="gray.7">
                {scansPerHour}
              </Text>
            ),
          },
          {
            accessor: "lastSevenDays",
            render: ({ lastSevenDays }) => (
              <Sparklines data={lastSevenDays}>
                <SparklinesCurve color={randomColor} />
              </Sparklines>
            ),
          },
        ]}
        records={examples}
      />
    </>
  );
}
