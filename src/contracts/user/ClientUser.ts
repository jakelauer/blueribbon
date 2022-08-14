import { DateTime } from "luxon";
import { Syncable } from "../base/Syncable";

import { BaseUser } from "./BaseUser";

type IClientUser = Omit<BaseUser, "joinDate" | "updatedDate" | "sync"> & {
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

export type ClientUserSyncable = Syncable<ClientUser>;
