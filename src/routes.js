 

// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import AdminAccountTable from 'views/Dashboard/AdminAccountTable';
import AdminTransactionTable from 'views/Dashboard/AdminTransactionTable';
import AdminCommunityTable from 'views/Dashboard/AdminCommunityTable';
import AdminUserTable from 'views/Dashboard/AdminUserTable';

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    // path: "/tables"
    path: "/adminuser",
    name: "User",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: AdminUserTable,
    layout: "/admin",
  },
  {
    path: "/adminaccount",
    name: "Account",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: AdminAccountTable,
    layout: "/admin",
  },
  {
    path: "/admintransaction",
    name: "Transaction",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: AdminTransactionTable,
    layout: "/admin",
  },
  {
    path: "/admincommunity",
    name: "Community",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color='inherit' />,
    component: AdminCommunityTable,
    layout: "/admin",
  },
];
export default dashRoutes;
