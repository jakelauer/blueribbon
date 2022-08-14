import { DateTime } from "luxon";
import { v4 } from "uuid";
import crypto from "crypto";

export type SyncStatus = "unchanged" | "updated" | "deleted" | "created";

export type SyncProps = {
	id: string;
	sync: {
		updated: DateTime;
		hash: string;
		status: SyncStatus;
	};
};

export type Syncable<T> = SyncProps & T;

export const createSyncId = (type: string) => `${type}-${v4()}`;

export const addSyncProps = <T>(type: string, data: T): Syncable<T> => ({
	id: v4(),
	sync: {
		hash: crypto.createHash("md5").update(JSON.stringify(data)).digest("hex"),
		status: "created",
		updated: DateTime.now(),
	},
	...data,
});
