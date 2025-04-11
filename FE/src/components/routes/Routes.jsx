import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [],
    errorElement: <NotFound />,
  },
]);
