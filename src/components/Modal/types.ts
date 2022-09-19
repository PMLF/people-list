import { ReactElement } from "react";
import { IPerson } from "../../utils/interfaces";

export interface IProps {
	title: string;
	open: boolean;
	person?: IPerson;
	footer: ReactElement[];
	editable?: boolean;
	close: () => void;
}
