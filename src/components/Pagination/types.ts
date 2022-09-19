export interface IProps {
	currentIndex: number;
	hasMorePages: boolean;
	changePage: (next: boolean) => void;
}
