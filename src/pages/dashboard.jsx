import { Grid, Paper, Text } from "@mantine/core";
import CardOne from "../components/dashboard/CardOne";

function Dashboard() {
  return (
    <Grid grow>
      <Grid.Col span={12}>
        <h1>Dashboard</h1>
      </Grid.Col>
      <Grid.Col span={8}>
        <Paper shadow="xs" p="md" style={{ height: "420px" }}>
          <CardOne />
        </Paper>
      </Grid.Col>
      <Grid.Col span={4}>
        <Paper shadow="xs" p="md">
          2
        </Paper>
      </Grid.Col>
      <Grid.Col span={12}>
        <Paper shadow="xs" p="md">
          3
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
export default Dashboard;
