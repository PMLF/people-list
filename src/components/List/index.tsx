// Styles
import Pagination from "../Pagination";
import { SectionStyled } from "./styled";

// Types
import { IProps } from "./types";

const List: React.FC<IProps> = ({
	children,
	currentIndex,
	hasMorePages,
	changePage,
}) => {
	return (
		<SectionStyled>
			{children}
			<Pagination
				currentIndex={currentIndex}
				changePage={changePage}
				hasMorePages={hasMorePages}
			/>
		</SectionStyled>
	);
};

export default List;
