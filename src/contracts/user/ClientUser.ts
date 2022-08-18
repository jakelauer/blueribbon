import { DateTime } from 'luxon';

import { createSyncable } from '../base/Syncable';
import { BaseUser } from './BaseUser';

type IClientUser = Omit<BaseUser, "joinDate" | "updatedDate"> & {
	joinDate?: DateTime;
	updatedDate?: DateTime;
};

export const ClientUser = createSyncable<IClientUser>("USER", {});
