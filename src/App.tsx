import React from "react";
import Router from "./routes";

import { useRegisterSW } from "virtual:pwa-register/react";

const App = function () {
    useRegisterSW({ immediate: true });
    return <Router />;
};

export default React.memo(App);
