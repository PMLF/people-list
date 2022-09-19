import { render, screen } from "@testing-library/react";
import PersonCard from "./";

describe("PersonCard component tests", () => {
	it("renders PersonCard component", () => {
		const personMock = {
			id: 1,
			name: "John Doe",
			organization: "Doe Corp.",
			phoneNumber: "911111111",
			email: "john@doe.corp",
		};
		const triggerListRefreshMock = jest.fn();

		render(
			<PersonCard
				person={personMock}
				triggerListRefresh={triggerListRefreshMock}
			/>
		);

		const personNameElement = screen.getByText(/John Doe/i);
		const personOrganizationElement = screen.getByText(/Doe Corp./i);

		expect(personNameElement).toBeInTheDocument();
		expect(personOrganizationElement).toBeInTheDocument();
	});
});
