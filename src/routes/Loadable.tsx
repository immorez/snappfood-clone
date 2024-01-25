/* eslint-disable react/display-name */
import { ElementType, Suspense } from "react";

import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component: ElementType) =>
    function (props: any) {
        return (
            <Suspense fallback={<LoadingScreen />}>
                <Component {...props} />
            </Suspense>
        );
    };

export default Loadable;
