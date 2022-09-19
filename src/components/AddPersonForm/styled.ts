import { Button, Form, InputNumber, Select } from "antd";
import styled from "styled-components";

export const SectionStyled = styled("section")`
	display: flex;
	flex-direction: column;
	font-family: "Open Sans", sans-serif;
`;

export const SelectField = styled(Select)`
	width: 100%;
	display: flex;
`;

export const NumericInputWrapper = styled(Form.Item)`
	width: 100%;
`;

export const NumericInput = styled(InputNumber)`
	width: 100%;
`;

export const SubmitButtonWrapper = styled(Form.Item)`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 0;
`;

export const SubmitButton = styled(Button)`
	width: 60px;
`;
