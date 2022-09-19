// Modules
import Swal from "sweetalert2";

// Interfaces
import { IGetPersonsData } from "../../hooks/usePersons/types";

// Utils
import { API_BASE_URL, API_TOKEN } from "../../utils/constants";
import { INewPersonRqBody, IPerson } from "../../utils/interfaces";

export const getPersons = (startIndex: number = 0, amount: number = 10) => {
	return new Promise<IGetPersonsData>((resolve, reject) => {
		fetch(
			`${API_BASE_URL}/persons?start=${startIndex}&limit=${amount}&api_token=${API_TOKEN}`
		)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
				},
				(error) => {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Couldn't fetch persons' profiles.",
					});
					reject(error);
				}
			);
	});
};

export const searchPersons = (term: string) => {
	return new Promise<IPerson[]>((resolve, reject) => {
		fetch(`${API_BASE_URL}/persons/search?term=${term}&api_token=${API_TOKEN}`)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result?.data?.items);
				},
				(error) => {
					reject(error);
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Couldn't search for that name...",
					});
				}
			);
	});
};

export const addPerson = (personData: INewPersonRqBody) => {
	return new Promise<IPerson[]>((resolve, reject) => {
		fetch(`${API_BASE_URL}/persons?api_token=${API_TOKEN}`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(personData),
		})
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result);
					Swal.fire({
						icon: "success",
						title: "New person added!",
					});
				},
				(error) => {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Couldn't add this person.",
					});
					reject(error);
				}
			);
	});
};

export const deletePersonById = (id: number) => {
	return new Promise<IPerson[]>((resolve, reject) => {
		fetch(`${API_BASE_URL}/persons/${id}?api_token=${API_TOKEN}`, {
			method: "DELETE",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
		})
			.then((res) => res.json())
			.then(
				(result) => {
					Swal.fire({
						icon: "success",
						title: "Person deleted.",
					});
					resolve(result);
				},
				(error) => {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Couldn't delete this person.",
					});
					reject(error);
				}
			);
	});
};
