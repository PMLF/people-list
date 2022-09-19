export interface IPerson {
	id: number;
	name: string;
	organization: string;
	phoneNumber: string;
	email: string;
	profileImg?: string;
}

export interface IOrganization {
	id: number;
	name: string;
}

export interface IAddPersonFormValues {
	name: string;
	phoneNumber: number;
	email: string;
	orgId: number;
}

export interface INewPersonRqBody {
	name: string;
	org_id: number;
	email: [
		{
			value: string;
			primary: boolean;
			label: string;
		}
	];
	phone: [
		{
			value: number;
			primary: boolean;
			label: string;
		}
	];
	visible_to: string;
	marketing_status: string;
	add_time: string;
}
