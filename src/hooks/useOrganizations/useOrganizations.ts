// Modules
import { useCallback } from "react";

// Services
import * as OrganizationsService from "../../services/organizations";

// Types
import { IOrganization } from "../../utils/interfaces";

const useOrganizations = () => {
	const getAllOrganizations = useCallback(async (): Promise<
		IOrganization[]
	> => {
		const orgsList: IOrganization[] = [];
		const rawData = await OrganizationsService.getAllOrganizations();

		rawData?.forEach((organization: IOrganization) => {
			orgsList.push({
				id: organization.id,
				name: organization.name,
			});
		});

		return orgsList;
	}, []);

	return { getAllOrganizations };
};

export default useOrganizations;
