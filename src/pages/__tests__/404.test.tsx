// NotFound.test.js

import { act, screen } from "@testing-library/react";
import NotFound from "../404"; // Adjust the path based on your project structure
import { render } from "@/setupTests";
import "@testing-library/jest-dom";
import { PATH_MAIN } from "@/routes/paths";

// Mock the useTranslation hook
jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Not Found Component", () => {
    it("renders NotFound component correctly", () => {
        render(<NotFound />);

        expect(screen.getByAltText("snapp-food-logo")).toBeInTheDocument();
        expect(screen.getByText("TEXT_PAGE_NOT_FOUND")).toBeInTheDocument();
        expect(
            screen.getByText("BUTTON_TEXT_BACK_TO_HOME"),
        ).toBeInTheDocument();
    });

    it('clicking the "Back to Home" button navigates to the home page', () => {
        render(<NotFound />, {
            routerOptions: { initialEntries: ["/404"] },
            useMemoryRouter: true,
        });

        const backButton = screen.getByText("BUTTON_TEXT_BACK_TO_HOME");
        act(() => {
            backButton.click();
        });

        expect(window.location.pathname).toBe(PATH_MAIN.home);
    });
});
