import MainLayout from "@/layout/Client/MainLayout";
import DonatePage from "@/pages/Client/Donate";
import DonateDetailsPage from "@/pages/Client/DonateDetails";
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
      },
      {
        path: "/donate",
        element: <DonatePage />
      },
      {
        path: "/donate/:fund",
        element: <DonateDetailsPage />
      }
    ]
  }
])