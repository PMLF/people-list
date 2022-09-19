// Modules
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Styles
import {
	SearchDiv,
	SearchIcon,
	SearchInput,
	SectionStyled,
	Title,
} from "./styled";

// Hooks
import usePersons from "../../hooks/usePersons/usePersons";

// Types
import { IProps } from "./types";

const UtilityBar: React.FC<IProps> = ({ updateList }) => {
	// States
	const [searchTerm, setSearchTerm] = useState("");

	// Hooks
	const { searchPersons } = usePersons();

	return (
		<>
			<SectionStyled>
				<Title>People's List</Title>
				<SearchDiv>
					<SearchInput
						onChange={(e) => setSearchTerm(e.target.value)}
						onKeyPress={async (e) => {
							if (e.key === "Enter") {
								const filteredPersons = await searchPersons(searchTerm);
								updateList(filteredPersons);
							}
						}}
						placeholder={`Filter by name`}
					/>
					<SearchIcon icon={faMagnifyingGlass} />
				</SearchDiv>
			</SectionStyled>
		</>
	);
};

export default UtilityBar;
