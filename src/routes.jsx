import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/home/Layout";
import Home from "./components/home/Home";
import HowToApply from "./components/HowToApply/HowToApply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "how-to-apply",
        element: <HowToApply />,
      },
    ],
  },
]);

export default router;