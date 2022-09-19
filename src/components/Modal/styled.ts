import styled from "styled-components";

export const PhotoArea = styled("section")`
	text-align: center;
	border-bottom: solid 1px #ccc;
	padding: 20px 0 44px;
`;

export const ProfileImage = styled("img")`
	width: 100px;
	border-radius: 50%;
	margin-bottom: 10px;
`;

export const PhotoAreaText = styled("p")`
	font-weight: 700;
	font-size: 16px;
	margin: 0;
`;

export const PhoneNumber = styled(PhotoAreaText)`
	color: #32cd32;
`;

export const DataArea = styled("section")`
	padding: 30px 0;
`;

export const DataField = styled("section")`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const Label = styled("p")`
	width: 30%;
	font-weight: 700;
	color: #555;
	text-align: right;
	margin: 0;
`;

export const Value = styled("section")`
	color: #777;
	margin-left: 30px;
`;
