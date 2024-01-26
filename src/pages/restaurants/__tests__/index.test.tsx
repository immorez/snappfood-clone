import { fireEvent, screen, waitFor } from "@testing-library/react";
import Restaurants from "..";
import { render } from "@/setupTests";
import { PATH_MAIN } from "@/routes/paths";

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Restaurants component", () => {
    it("renders Restaurants component correctly", async () => {
        const { container } = render(<Restaurants />);

        await waitFor(async () => {
            expect(screen.queryByTestId("skeleton")).toBeNull();
        });

        expect(container.firstChild).toMatchSnapshot();
    });

    it("clicking back button navigates to the home page", async () => {
        render(<Restaurants />, {
            routerOptions: { initialEntries: ["/restaurants"] },
        });
        const backButton = screen.getByRole("link", { name: "" });
        fireEvent.click(backButton);

        await waitFor(() => {
            expect(window.location.pathname).toBe(PATH_MAIN.home);
        });
    });
});
