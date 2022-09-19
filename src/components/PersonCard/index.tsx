// Modules
import { useState } from "react";
import "antd/dist/antd.css";
import Swal from "sweetalert2";

// Styles
import {
	Card,
	CompanyName,
	LeftSideInfo,
	Name,
	ProfilePicture,
} from "./styled";
import { ModalButton } from "../../utils/styled";

// Components
import Modal from "../Modal";

// Types
import { IProps } from "./types";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

// Hooks
import usePersons from "../../hooks/usePersons/usePersons";

const PersonCard: React.FC<IProps> = ({ person, triggerListRefresh }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { deletePersonById } = usePersons();

	const deletePerson = () => {
		Swal.fire({
			title: "Are you sure you want to delete this person?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "red",
			cancelButtonColor: "#333",
			confirmButtonText: "Delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await deletePersonById(person.id);
				triggerListRefresh();
				setIsModalVisible(false);
			}
		});
	};

	return (
		<>
			<Card onClick={() => setIsModalVisible(true)}>
				<LeftSideInfo>
					<Name>{person.name}</Name>
					<CompanyName>
						<FontAwesomeIcon icon={faBuilding} /> {person.organization}
					</CompanyName>
				</LeftSideInfo>
				<ProfilePicture alt="profile of user" src={person.profileImg} />
			</Card>
			<Modal
				title="Person information"
				person={person}
				open={isModalVisible}
				close={() => setIsModalVisible(false)}
				footer={[
					<ModalButton danger key="delete" onClick={() => deletePerson()}>
						Delete
					</ModalButton>,
					<ModalButton key="back" onClick={() => setIsModalVisible(false)}>
						Back
					</ModalButton>,
				]}
			/>
		</>
	);
};

export default PersonCard;
