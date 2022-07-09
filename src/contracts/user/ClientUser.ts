import { DateTime } from 'luxon';

import { BaseUser } from './BaseUser';

type IClientUser = Omit<BaseUser, 'joinDate' | 'updatedDate'> & {
	joinDate?: DateTime;
	updatedDate?: DateTime;
};

export class ClientUser implements IClientUser {
	username: string;
	joinDate?: DateTime;
	updatedDate?: DateTime;
	firstName?: string;
	lastName?: string;
	addressLine1?: string;
	addressLine2?: string;
	city?: string;
	state?: string;
	zip?: string;
	country?: string;
	phone?: string;

	constructor(username: string) {
		this.username = username;
	}
}
