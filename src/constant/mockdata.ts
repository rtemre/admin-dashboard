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

export interface CityFacility {
  id: string;
  imgUrl: string;
  name: string;
  type: string;
  services: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
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

export const cityFacilityData: CityFacility[] = [
  {
    id: "1",
    name: "New York City",
    type: "Metro",
    services: "Healthcare, Education, Transportation",
    code: "NYC001",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-10",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "2",
    name: "Los Angeles",
    type: "Tier Three",
    services: "Healthcare, Entertainment, Transportation",
    code: "LA002",
    createdAt: "2024-01-05",
    updatedAt: "2024-01-15",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "3",
    name: "Chicago",
    type: "Tier One",
    services: "Healthcare, Education, Transportation",
    code: "CHI003",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-20",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "4",
    name: "Houston",
    type: "Tier Two",
    services: "Healthcare, Energy, Transportation",
    code: "HOU004",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-25",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "5",
    name: "Phoenix",
    type: "Tribal",
    services: "Healthcare, Education, Transportation",
    code: "PHX005",
    createdAt: "2024-01-20",
    updatedAt: "2024-01-30",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "6",
    name: "Philadelphia",
    type: "Metro",
    services: "Healthcare, Education, Transportation",
    code: "PHI006",
    createdAt: "2024-01-25",
    updatedAt: "2024-02-05",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "7",
    name: "San Antonio",
    type: "Tier One",
    services: "Healthcare, Education, Transportation",
    code: "SA007",
    createdAt: "2024-01-30",
    updatedAt: "2024-02-10",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "8",
    name: "San Diego",
    type: "Tier Two",
    services: "Healthcare, Education, Transportation",
    code: "SD008",
    createdAt: "2024-02-05",
    updatedAt: "2024-02-15",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "9",
    name: "Dallas",
    type: "Tribal",
    services: "Healthcare, Education, Transportation",
    code: "DAL009",
    createdAt: "2024-02-10",
    updatedAt: "2024-02-20",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
  {
    id: "10",
    name: "San Jose",
    type: "Metro",
    services: "Healthcare, Education, Transportation",
    code: "SJ010",
    createdAt: "2024-02-15",
    updatedAt: "2024-02-25",
    updatedBy: "Admin",
    imgUrl: "/src/assets/images/city-image.png",
  },
];
