import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import i18n from "./utils/i18n.ts";
import { store } from "./redux/store.ts";
import App from "./App.tsx";

import "./sass/app.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </I18nextProvider>
        </Provider>
    </React.StrictMode>,
);
