import { render, screen } from "@testing-library/react";
import List from "./";

describe("List component tests", () => {
	it("renders List component", () => {
		const changePageMock = jest.fn();

		render(
			<List currentIndex={0} hasMorePages={true} changePage={changePageMock}>
				<li>First</li>
				<li>Second</li>
				<li>Third</li>
			</List>
		);

		const listFirstElement = screen.getByText(/First/i);
		const listSecondElement = screen.getByText(/Second/i);
		const listThirdElement = screen.getByText(/Third/i);

		expect(listFirstElement).toBeInTheDocument();
		expect(listSecondElement).toBeInTheDocument();
		expect(listThirdElement).toBeInTheDocument();
	});
});
