import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/trendingApps.json"),
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => fetch("/allApps.json"),
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails></AppDetails>,
        loader: () => fetch("/allApps.json"),
      },
    ],
  },
]);
