import styled from "styled-components";

export const Card = styled("section")`
	border: solid 1px #ccc;
	height: 50px;
	width: calc(100% - 40px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #fff;
	margin-bottom: 10px;
	box-sizing: content-box;

	&:hover {
		background-color: #eee;
		transition: background-color ease-in 0.3s;
	}
`;

export const LeftSideInfo = styled("div")`
	display: flex;
	flex-direction: column;
`;

export const Name = styled("p")`
	font-size: 18px;
	margin: 0;
	text-align: left;
`;

export const CompanyName = styled("p")`
	font-size: 14px;
	color: #555;
	margin: 0;
	text-align: left;
`;

export const ProfilePicture = styled("img")`
	border-radius: 50%;
	height: 100%;
`;
