// Modules
import { useEffect, useState } from "react";
import { Form, Input, Select } from "antd";

// Styles
import {
	NumericInput,
	SectionStyled,
	SelectField,
	SubmitButton,
	SubmitButtonWrapper,
} from "./styled";

// Hooks
import useOrganizations from "../../hooks/useOrganizations/useOrganizations";
import usePersons from "../../hooks/usePersons/usePersons";

// Utils
import { IAddPersonFormValues, IOrganization } from "../../utils/interfaces";
import { EMAIL_REGEX, PHONE_REGEX } from "../../utils/constants";

const AddPersonForm: React.FC = () => {
	// States
	const [orgsList, setOrgsList] = useState<IOrganization[]>([]);

	// Hooks
	const { getAllOrganizations } = useOrganizations();
	const { addPerson } = usePersons();

	// Effects
	useEffect(() => {
		async function getOrganizationsOptions() {
			setOrgsList(await getAllOrganizations());
		}

		getOrganizationsOptions();
	}, [getAllOrganizations]);

	const submitValues = (values: IAddPersonFormValues) => {
		addPerson(values);
	};

	return (
		<SectionStyled>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={submitValues}
				onFinishFailed={() => {}}
				autoComplete="off"
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[{ required: true, message: "Please insert your name" }]}
				>
					<Input placeholder="Insert name" />
				</Form.Item>
				<Form.Item
					label="Phone Number"
					name="phoneNumber"
					rules={[
						{
							required: true,
							message: "Please insert a valid phone number",
							pattern: PHONE_REGEX,
						},
					]}
				>
					<NumericInput placeholder="Insert phone number" />
				</Form.Item>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please insert a valid email",
							pattern: EMAIL_REGEX,
						},
					]}
				>
					<Input placeholder="Insert email" />
				</Form.Item>
				<Form.Item
					name="orgId"
					label="Organization"
					rules={[{ required: true, message: "Please pick an organization" }]}
				>
					<SelectField placeholder="Select organization" allowClear>
						{orgsList.map((org) => (
							<Select.Option key={org.id} value={org.id}>
								{org.name}
							</Select.Option>
						))}
					</SelectField>
				</Form.Item>
				<SubmitButtonWrapper>
					<SubmitButton type="primary" htmlType="submit">
						Add
					</SubmitButton>
				</SubmitButtonWrapper>
			</Form>
		</SectionStyled>
	);
};

export default AddPersonForm;
