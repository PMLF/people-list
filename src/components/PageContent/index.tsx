// Modules
import { useEffect, useState } from "react";
import { Button } from "antd";

// Components
import UtilityBar from "../UtilityBar";
import PersonsList from "../PersonsList";
import Modal from "../Modal";

// Styles
import { ModalButton } from "../../utils/styled";
import { AddButtonSection, ButtonIcon } from "./styled";

// Types
import { IPerson } from "../../utils/interfaces";

// Utils
import { PAGE_SIZE } from "../../utils/constants";

// Hooks
import usePersons from "../../hooks/usePersons/usePersons";

// Icons
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const PageContent: React.FC = () => {
	// States
	const [personsList, setPersonsList] = useState<IPerson[]>([]);
	const [isModalVisible, setIsModalVisible] = useState(false);

	// Custom Hooks
	const { getPersonsPage } = usePersons();

	// Effects
	useEffect(() => {
		async function fetchPersonsOnStart() {
			const data = await getPersonsPage(0, PAGE_SIZE);
			setPersonsList(data.personsList);
		}
		fetchPersonsOnStart();
	}, [getPersonsPage]);

	return (
		<>
			<UtilityBar updateList={setPersonsList} />
			<AddButtonSection>
				<Button onClick={() => setIsModalVisible(true)}>
					<ButtonIcon icon={faAdd} />
					Add person
				</Button>
			</AddButtonSection>
			<PersonsList personsList={personsList} setPersonsList={setPersonsList} />
			<Modal
				title="Add new person"
				open={isModalVisible}
				close={() => setIsModalVisible(false)}
				footer={[
					<ModalButton key="cancel" onClick={() => setIsModalVisible(false)}>
						Cancel
					</ModalButton>,
				]}
				editable
			/>
		</>
	);
};

export default PageContent;
