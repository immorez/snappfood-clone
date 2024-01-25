import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loadable from "./Loadable";

const Home = Loadable(lazy(() => import("@/pages/home")));

export default function Router() {
    return useRoutes(
        [
            {
                path: "/",
                children: [
                    {
                        path: "/home",
                        element: <Home />,
                    },
                ],
            },
            { path: "*", element: <Navigate to="/404" replace /> },
        ],
        location,
    );
}
