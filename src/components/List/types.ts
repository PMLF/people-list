import { ReactElement } from "react";

export interface IProps {
	children: ReactElement[];
	currentIndex: number;
	hasMorePages: boolean;
	changePage: (next?: boolean) => void;
}
