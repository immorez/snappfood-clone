import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "..";

import { render } from "@/setupTests";
import { PATH_MAIN } from "@/routes/paths";

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Home Component", () => {
    it("renders Home component correctly", () => {
        render(<Home />);

        expect(screen.getByText("TEXT_HOME_PAGE_SUBTITLE")).toBeInTheDocument();
        expect(
            screen.getByText("BUTTON_TEXT_RESTAURANT_HOME_PAGE"),
        ).toBeInTheDocument();
    });

    it('clicking the "Go To Restaurants" button navigates to the restaurants page', async () => {
        render(<Home />, { routerOptions: { initialEntries: ["/"] } });
        const goToRestaurants = screen.getByText(
            "BUTTON_TEXT_RESTAURANT_HOME_PAGE",
        );

        expect(goToRestaurants).toBeInTheDocument();

        userEvent.click(goToRestaurants);

        await waitFor(() => {
            expect(window.location.pathname).toBe(PATH_MAIN.restaurant);
        });
    });
});
