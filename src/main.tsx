import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "./utils/i18n.ts";
import App from "./App.tsx";

import "./sass/app.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>,
);
