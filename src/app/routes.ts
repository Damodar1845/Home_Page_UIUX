import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/page2",
    Component: Page2,
  },
]);
