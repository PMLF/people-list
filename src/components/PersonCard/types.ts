import { IPerson } from "../../utils/interfaces";

export interface IProps {
	person: IPerson;
	triggerListRefresh: (next?: boolean) => void;
}
