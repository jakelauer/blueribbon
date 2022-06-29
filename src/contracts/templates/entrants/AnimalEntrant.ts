import { BaseEntrant } from './BaseEntrant';

export interface AnimalEntrant extends BaseEntrant {
	fullName: string;
	breed: {
		name: string;
		variety: string;
	};
	sex: string;
	dob: string;
	birthplace: string;
	owners: string[];
}
