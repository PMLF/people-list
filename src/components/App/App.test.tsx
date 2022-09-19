import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component tests", () => {
	it("renders App component", () => {
		render(<App />);
		const appComponent = screen.getByTestId(/app/i);
		expect(appComponent).toBeInTheDocument();
	});
});
