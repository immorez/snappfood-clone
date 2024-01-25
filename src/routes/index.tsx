import { ReactElement, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loadable from "./Loadable";
import MainLayout from "@/components/MainLayout";

const Home = Loadable(lazy(() => import("@/pages/home")));
const Restaurants = Loadable(lazy(() => import("@/pages/restaurants")));
const NotFound = Loadable(lazy(() => import("@/pages/404")));

/**
 * Router component that defines the application's routes using 'useRoutes'.
 * It includes a route for the Home component and a catch-all route for 404 errors.
 *
 * @returns {ReactElement} The router component.
 */

export default function Router(): ReactElement | null {
    return useRoutes(
        [
            {
                path: "/",
                element: <MainLayout />,
                children: [
                    {
                        path: "/",
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "/restaurants",
                        element: <Restaurants />,
                    },
                    {
                        path: "/404",
                        element: <NotFound />,
                    },
                ],
            },
            { path: "*", element: <Navigate to="/404" replace /> },
        ],
        location,
    );
}
