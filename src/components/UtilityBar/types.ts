import { IPerson } from "../../utils/interfaces";

export interface IProps {
	updateList: (personList: IPerson[]) => void;
}
