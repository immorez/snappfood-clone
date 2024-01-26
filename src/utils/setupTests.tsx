import { RenderOptions, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter } from "react-router-dom";
import { ReactElement } from "react";

interface AllTheProvidersProps {
    children: React.ReactNode;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>{children}</BrowserRouter>
            </I18nextProvider>
        </Provider>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
