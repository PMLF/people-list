// Modules
import Swal from "sweetalert2";

// Utils
import { API_BASE_URL, API_TOKEN } from "../../utils/constants";
import { IOrganization } from "../../utils/interfaces";

export const getAllOrganizations = () => {
	return new Promise<IOrganization[]>((resolve, reject) => {
		fetch(`${API_BASE_URL}/organizations?&api_token=${API_TOKEN}`)
			.then((res) => res.json())
			.then(
				(result) => {
					resolve(result.data);
				},
				(error) => {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Couldn't fetch organizations.",
					});
					reject(error);
				}
			);
	});
};
