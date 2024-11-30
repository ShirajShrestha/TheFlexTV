import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/Details.jsx";
import ShowSection from "./pages/ShowSection.jsx";
import MoreShows from "./pages/MoreShows.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:type",
        element: <ShowSection />,
      },
      {
        path: "/category/:type/:id",
        element: <Details />,
      },
      {
        path: "/category/:type/section",
        element: <MoreShows />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
