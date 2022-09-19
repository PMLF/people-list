import { IPerson } from "../../utils/interfaces";

export interface IGetPersonsData {
	data: IPerson[];
	additional_data: IAdditionalData;
}

interface IAdditionalData {
	pagination: IPagination;
}

interface IPagination {
	limit: number;
	more_items_in_collection: boolean;
	next_start: number;
	start: number;
}

export interface IPageData {
	personsList: IPerson[];
	hasMoreData: boolean;
}
