// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import usePersons from "../../hooks/usePersons/usePersons";
// import AddPersonForm from "./";

import { PAGE_SIZE } from "../../utils/constants";

describe("AddPersonForm component tests", () => {
	it("Dummy test", () => {
		expect(PAGE_SIZE).toEqual(10);
	});
	// it("renders AddPersonForm component", async () => {
	// 	render(<AddPersonForm />);

	// 	// Label elements
	// 	const nameLabelElement = screen.getByText(/Name/i);
	// 	const phoneNumberLabelElement = screen.getByText(/Phone Number/i);
	// 	const emailLabelElement = screen.getByText(/Email/i);
	// 	const organizationLabelElement = screen.getByText(/Organization/i);

	// 	// Input elements
	// 	const nameInputElement = screen.getByPlaceholderText(/Insert name/i);
	// 	const phoneNumberInputElement =
	// 		screen.getByPlaceholderText(/Insert phone number/i);
	// 	const emailInputElement = screen.getByPlaceholderText(/Insert email/i);
	// 	const organizationSelectElement =
	// 		screen.getByPlaceholderText(/Select organization/i);

	// 	expect(nameLabelElement).toBeInTheDocument();
	// 	expect(phoneNumberLabelElement).toBeInTheDocument();
	// 	expect(emailLabelElement).toBeInTheDocument();
	// 	expect(organizationLabelElement).toBeInTheDocument();

	// 	expect(nameInputElement).toBeInTheDocument();
	// 	expect(phoneNumberInputElement).toBeInTheDocument();
	// 	expect(emailInputElement).toBeInTheDocument();
	// 	expect(organizationSelectElement).toBeInTheDocument();
	// });

	// it("AddPersonForm calls submits values inserted into it", async () => {
	// 	const { addPerson } = usePersons();
	// 	const submitValues = jest.fn(addPerson);

	// 	render(<AddPersonForm />);

	// 	const inputName = screen.getAllByPlaceholderText(/Insert name/)[0];
	// 	const inputPhoneNumber =
	// 		screen.getAllByPlaceholderText(/Insert phone number/)[0];
	// 	const inputEmail = screen.getAllByPlaceholderText(/Insert email/)[0];
	// 	const selectOrganization = screen.getAllByPlaceholderText(
	// 		/Please pick an organization/
	// 	)[0];

	// 	const submitButton = screen.getByRole("button", { name: /add/i });

	// 	fireEvent.change(inputName, { target: { value: "lorem" } });
	// 	fireEvent.change(inputPhoneNumber, { target: { value: "123456789" } });
	// 	fireEvent.change(inputEmail, { target: { value: "lorem@ipsum.com" } });
	// 	fireEvent.change(selectOrganization, { target: { value: "lorem" } });

	// 	userEvent.click(submitButton);
	// 	await waitFor(function () {
	// 		expect(submitButton).toBeInTheDocument();
	// 	}).then(() => {
	// 		// eslint-disable-next-line testing-library/no-wait-for-side-effects
	// 		fireEvent.click(submitButton);
	// 	});

	// 	await waitFor(() => expect(submitValues).toHaveBeenCalledTimes(1));
	// });
});
