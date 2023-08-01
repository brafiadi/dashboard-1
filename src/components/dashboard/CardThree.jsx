import { DataTable } from "mantine-datatable";

const examples = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  avatar: `https://picsum.photos/id/${i + 1}/50/50`,
  user: `User ${Math.floor(Math.random() * 100)}`,
  position: `Position ${i + 1}`,
  target: Math.floor(Math.random() * 5000) + 1000,
  status: Math.random() < 0.5 ? "completed" : "in progress",
  lastScanned: `${Math.floor(Math.random() * 60)} minutes ago`,
  scansPerHour: Math.floor(Math.random() * 20) + 5,
  lastSevenDays: Math.floor(Math.random() * 100) + 50,
}));

export default function TableExample() {
  return <DataTable columns={[{ accessor: "user" }, { accessor: "target" }, { accessor: "status" }, { accessor: "lastScanned" }, { accessor: "scansPerHour" }, { accessor: "lastSevenDays" }]} records={examples} />;
}
