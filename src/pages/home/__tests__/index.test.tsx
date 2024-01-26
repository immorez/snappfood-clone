import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import Home from "..";

describe("Home Component", () => {
    it("renders Home component correctly", () => {
        render(<Home />);

        // Add assertions based on your component structure and content
        expect(screen.getByText("Your Subtitle Text")).toBeInTheDocument();
        expect(screen.getByText("Your Button Text")).toBeInTheDocument();
        // Add more assertions as needed
    });
});
