export interface DashboardStat {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  createdAt: string;
}

export const dashboardStats: DashboardStat[] = [
  {
    id: "1",
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive",
  },
  {
    id: "2",
    title: "Subscriptions",
    value: "+2350",
    change: "+180.1%",
    changeType: "positive",
  },
  {
    id: "3",
    title: "Active Users",
    value: "+12,234",
    change: "+19%",
    changeType: "positive",
  },
  {
    id: "4",
    title: "Sales",
    value: "+573",
    change: "+201",
    changeType: "positive",
  },
];

export const usersData: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "User",
    status: "inactive",
    createdAt: "2024-01-25",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "Editor",
    status: "active",
    createdAt: "2024-02-01",
  },
  {
    id: "5",
    name: "David Brown",
    email: "david.brown@example.com",
    role: "User",
    status: "pending",
    createdAt: "2024-02-05",
  },
  {
    id: "6",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Admin",
    status: "active",
    createdAt: "2024-02-10",
  },
  {
    id: "7",
    name: "Chris Miller",
    email: "chris.miller@example.com",
    role: "User",
    status: "active",
    createdAt: "2024-02-15",
  },
  {
    id: "8",
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    role: "Editor",
    status: "inactive",
    createdAt: "2024-02-20",
  },
];
