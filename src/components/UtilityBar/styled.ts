import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const SectionStyled = styled("section")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70px;
	border-bottom: solid 1px #ccc;
	padding: 0 40px;
`;

export const SearchInput = styled("input")`
	background-color: #eee;
	border: none;
	height: 30px;
	width: 200px;
	border-radius: 15px;
	padding-left: 40px;
`;

export const Title = styled("h1")`
	font-weight: 700;
	margin: 0;
`;

export const MagnifierIcon = styled("svg")`
	font-size: 24px;
`;

export const SearchDiv = styled("div")`
	position: relative;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
	position: absolute;
	left: 0;
	padding: 9px 9px 9px 16px;
`;
