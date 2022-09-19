// Components
import PersonCard from "../PersonCard";
import List from "../List";

// Types
import { IProps } from "./types";
import { IPerson } from "../../utils/interfaces";
import { useState } from "react";

// Utils
import { PAGE_SIZE } from "../../utils/constants";

// Hooks
import usePersons from "../../hooks/usePersons/usePersons";

const PersonsList: React.FC<IProps> = ({ personsList, setPersonsList }) => {
	// States
	const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
	const [hasMorePages, setHasMorePages] = useState(true);

	// Custom Hooks
	const { getPersonsPage } = usePersons();

	const fetchPeopleData = async (next?: boolean) => {
		let newIndex;
		if (next != null) {
			newIndex = next
				? currentPersonIndex + PAGE_SIZE
				: currentPersonIndex - PAGE_SIZE;

			setCurrentPersonIndex(newIndex);
		}
		const data = await getPersonsPage(newIndex || 0, PAGE_SIZE);

		setPersonsList(data.personsList);
		setHasMorePages(data.hasMoreData);
	};

	const getPhotoPlaceholder = (name: string): string => {
		const nameList = name.split(" ");
		let initials = "";

		if (nameList.length > 1) {
			initials += nameList[0][0] + nameList.slice(-1)[0];
		} else if (nameList.length === 1) {
			initials += nameList[0][0] + nameList[0][1];
		}
		return `https://eu.ui-avatars.com/api/?name=
			${initials}`;
	};

	return (
		<List
			currentIndex={currentPersonIndex}
			hasMorePages={hasMorePages}
			changePage={fetchPeopleData}
		>
			{personsList?.map((person: IPerson, index: number) => (
				<PersonCard
					key={index}
					triggerListRefresh={fetchPeopleData}
					person={{
						id: person.id,
						name: person.name,
						organization: person.organization,
						phoneNumber: person.phoneNumber,
						email: person.email,
						profileImg: person.profileImg || getPhotoPlaceholder(person.name),
					}}
				/>
			))}
		</List>
	);
};

export default PersonsList;
