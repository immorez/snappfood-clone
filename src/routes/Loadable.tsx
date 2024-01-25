/* eslint-disable react/display-name */
import { ElementType, Suspense } from "react";

import LoadingScreen from "../components/LoadingScreen";

/**
 * Loadable is a higher-order component (HOC) that wraps a given component
 * with React Suspense to handle code-splitting and display a loading screen
 * while the component is being loaded.
 *
 * @param {ElementType} Component - The component to be lazily loaded.
 * @returns {Function} A function that represents the wrapped component.
 */

const Loadable = (Component: ElementType) =>
    function (props: any) {
        return (
            <Suspense fallback={<LoadingScreen />}>
                <Component {...props} />
            </Suspense>
        );
    };

export default Loadable;
