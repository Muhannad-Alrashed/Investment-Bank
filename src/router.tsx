import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import Overview from "./pages/Overview";
import Sustainability from "./pages/Sustainability";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "sustainability",
        element: <Sustainability />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
