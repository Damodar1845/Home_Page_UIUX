import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import ProjectDetail from "./pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/page2",
    Component: Page2,
  },
  {
    path: "/project/:projectId",
    Component: ProjectDetail,
  },
]);
