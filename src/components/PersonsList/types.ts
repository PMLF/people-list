import { IPerson } from "../../utils/interfaces";

export interface IProps {
	personsList: IPerson[];
	setPersonsList: (personsList: IPerson[]) => void;
}
