import { Navigate, createBrowserRouter } from "react-router-dom";
import { MarvelPage } from "../heroes/Pages/MarvelPage";
import { DcPage } from "../heroes/Pages/DcPage";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth/Pages/LoginPage";
import { SearchPage } from "../heroes/Pages/SearchPage";
import { HeroPage } from "../heroes/Pages/HeroPage";

export  const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp/>,
    children: [
      {
        path: "/marvel",
        element: <MarvelPage />,
      },
      {
        path: "/dc",
        element: <DcPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/hero/:id",
        element: <HeroPage />,
      },
    ],
  },
  {
    path:"/login",
    element:<LoginPage/>,
  },
  {
    path:"/*",
    element:<Navigate to={'/'}/>,
  },
]);