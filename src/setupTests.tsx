import "jest";
import "@testing-library/jest-dom";
import { RenderOptions, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import {
    BrowserRouter,
    MemoryRouter,
    MemoryRouterProps,
} from "react-router-dom";
import { ReactElement } from "react";

interface AllTheProvidersProps {
    children: React.ReactNode;
    routerOptions?: MemoryRouterProps;
    useMemoryRouter?: boolean;
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({
    children,
    routerOptions,
    useMemoryRouter = false,
}) => {
    const RouterComponent = useMemoryRouter ? MemoryRouter : BrowserRouter;
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <RouterComponent {...routerOptions}>{children}</RouterComponent>
            </I18nextProvider>
        </Provider>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper"> & Partial<AllTheProvidersProps>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
