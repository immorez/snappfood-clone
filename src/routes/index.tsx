import { ReactElement, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loadable from "./Loadable";

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
                children: [
                    {
                        path: "/home",
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
