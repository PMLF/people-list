// Modules
import { useCallback } from "react";

// Services
import * as PersonsService from "../../services/persons";

// Utils
import { PAGE_SIZE } from "../../utils/constants";

// Types
import {
	IAddPersonFormValues,
	INewPersonRqBody,
	IPerson,
} from "../../utils/interfaces";
import { IPageData } from "./types";

const usePersons = () => {
	const getPersonsPage = useCallback(
		async (startIndex: number, amount: number): Promise<IPageData> => {
			const personsList: IPerson[] = [];
			const rawData = await PersonsService.getPersons(startIndex, amount);

			rawData?.data?.forEach((person: any) => {
				personsList.push({
					id: person.id,
					name: person.name,
					email: person.primary_email,
					organization: person.org_name,
					phoneNumber: person.phone[0].value,
					profileImg: person.picture_id,
				});
			});

			return {
				personsList,
				hasMoreData:
					rawData?.additional_data?.pagination?.more_items_in_collection,
			};
		},
		[]
	);

	const searchPersons = useCallback(
		async (term: string): Promise<IPerson[]> => {
			let personsList: IPerson[] = [];

			if (!term) {
				personsList = await (await getPersonsPage(0, PAGE_SIZE)).personsList;
			} else {
				const rawData = await PersonsService.searchPersons(term);

				rawData?.forEach((person: any) => {
					personsList.push({
						id: person.item.id,
						name: person.item.name,
						email: person.item.emails[0],
						organization: person.item.organization.name,
						phoneNumber: person.item.phones[0],
						profileImg: undefined,
					});
				});
			}

			return personsList;
		},
		[getPersonsPage]
	);

	const addPerson = useCallback((personData: IAddPersonFormValues): void => {
		const newPerson: INewPersonRqBody = {
			name: personData.name,
			org_id: personData.orgId,
			email: [
				{
					value: personData.email,
					primary: true,
					label: "main",
				},
			],
			phone: [
				{
					value: personData.phoneNumber,
					primary: true,
					label: "main",
				},
			],
			visible_to: String(personData.orgId),
			marketing_status: "1",
			add_time: "1",
		};
		PersonsService.addPerson(newPerson).then((data) => data);
	}, []);

	const deletePersonById = useCallback(
		async (personId: number): Promise<void> => {
			await PersonsService.deletePersonById(personId);
		},
		[]
	);

	return { getPersonsPage, searchPersons, addPerson, deletePersonById };
};

export default usePersons;
