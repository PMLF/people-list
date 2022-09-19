// Modules
import { useState } from "react";

// Styles
import { ButtonStyled, PageNumbers, SectionStyled } from "./styled";

// Types
import { IProps } from "./types";

const PersonCard: React.FC<IProps> = ({
	currentIndex,
	hasMorePages,
	changePage,
}) => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<SectionStyled>
			<ButtonStyled
				onClick={() => {
					changePage(false);
					setCurrentPage(currentPage - 1);
				}}
				disabled={currentIndex === 0}
			>
				Previous
			</ButtonStyled>
			<PageNumbers>Page {currentPage}</PageNumbers>
			<ButtonStyled
				onClick={() => {
					changePage(true);
					setCurrentPage(currentPage + 1);
				}}
				disabled={!hasMorePages}
			>
				Next
			</ButtonStyled>
		</SectionStyled>
	);
};

export default PersonCard;
