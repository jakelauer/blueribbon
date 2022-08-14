import { Syncable } from "../base/Syncable";

export type BaseUser = Syncable<{
	username?: string;
	joinDate?: string;
	updatedDate?: string;
	firstName?: string;
	lastName?: string;
	addressLine1?: string;
	addressLine2?: string;
	city?: string;
	state?: string;
	zip?: string;
	country?: string;
	phone?: string;
}>;
