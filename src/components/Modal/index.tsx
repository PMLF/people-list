// Components
import { Modal as AntdModal } from "antd";
import AddPersonForm from "../AddPersonForm";

// Styles
import {
	DataArea,
	DataField,
	Label,
	PhoneNumber,
	PhotoArea,
	PhotoAreaText,
	ProfileImage,
	Value,
} from "./styled";

// Types
import { IProps } from "./types";

const Modal: React.FC<IProps> = ({
	title,
	open,
	person,
	footer,
	editable,
	close,
}) => {
	return (
		<AntdModal title={title} open={open} onCancel={close} footer={footer}>
			{editable ? (
				<AddPersonForm />
			) : (
				<>
					<PhotoArea>
						<ProfileImage alt="Profile of user" src={person?.profileImg} />
						<PhotoAreaText>{person?.name}</PhotoAreaText>
						<PhoneNumber>{person?.phoneNumber}</PhoneNumber>
					</PhotoArea>
					<DataArea>
						<DataField>
							<Label>Email</Label>
							<Value>{person?.email}</Value>
						</DataField>
						<DataField>
							<Label>Organization</Label>
							<Value>{person?.organization}</Value>
						</DataField>
					</DataArea>
				</>
			)}
		</AntdModal>
	);
};

export default Modal;
