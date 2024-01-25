import React from "react";
import { Outlet } from "react-router-dom";

/**
 * MainLayout is a higher-order component that represents the main layout
 * structure for your application. It includes a common header, renders the
 * child routes using React Router's Outlet, and provides space for a bottom
 * navigation component.
 */

const MainLayout: React.FC = function () {
    return (
        <>
            {/* Header and all other common components... */}
            <Outlet />
            {/* Bottom navigation here... */}
        </>
    );
};

export default React.memo(MainLayout);
