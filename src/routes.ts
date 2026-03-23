import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { Dashboard } from "./components/Dashboard";
import { MachineRental } from "./components/MachineRental";
import { ExpenseTracking } from "./components/ExpenseTracking";
import { TechnologyInfo } from "./components/TechnologyInfo";
import { YieldTracking } from "./components/YieldTracking";
import { FundingInfo } from "./components/FundingInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/machines",
    Component: MachineRental,
  },
  {
    path: "/expenses",
    Component: ExpenseTracking,
  },
  {
    path: "/technology",
    Component: TechnologyInfo,
  },
  {
    path: "/yield",
    Component: YieldTracking,
  },
  {
    path: "/funding",
    Component: FundingInfo,
  },
]);
