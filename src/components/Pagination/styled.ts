import { Button } from "antd";
import styled from "styled-components";

export const SectionStyled = styled("section")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 30px;
	width: 100%;
`;

export const ButtonStyled = styled(Button)`
	border: solid 1px #ccc;
	width: 60px;

	&:hover,
	&:active,
	&:focus {
		border: solid 1px #ccc;
		color: #000;
		background-color: #eee;
	}
`;

export const PageNumbers = styled('p')`
	margin: 0;
`
