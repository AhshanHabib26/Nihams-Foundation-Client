import MainLayout from "@/layout/Client/MainLayout";
import HomePage from "@/pages/Client/Home";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
])