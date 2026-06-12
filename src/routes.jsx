import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/home/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  ]);

export default router;