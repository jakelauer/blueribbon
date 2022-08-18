import crypto from 'crypto';
import { DateTime } from 'luxon';
import { v4 } from 'uuid';

export type ValidTypes = "USER";

export type SyncStatus = "unchanged" | "updated" | "deleted" | "created";

export type SyncProps = {
	updatedLocal: DateTime;
	updated?: DateTime;
	hash: string;
	status: SyncStatus;
};

export type SyncUpdate = {
	updatedLocal: DateTime;
	hash: string;
	status: SyncStatus;
};

export type HasSyncProps<T> = T & {sync: SyncProps};

export const createSyncId = (type: ValidTypes) => `${type}-${v4()}`;

/**
 * Return sync props for data
 * @param data The data to hash
 * @param isReconcile If true, this action happened by syncing back to source
 * @returns void
 */
export const getSyncUpdate = <T>(data: T): SyncUpdate => ({
	hash: crypto.createHash("md5").update(JSON.stringify(data)).digest("hex"),
	status: "updated",
	updatedLocal: DateTime.now()
});

/**
 * Return sync props for data
 * @param data The data to hash
 * @param isReconcile If true, this action happened by syncing back to source
 * @returns void
 */
export const getSyncProps = <T>(data: T, updated?: DateTime): SyncProps => ({
	hash: crypto.createHash("md5").update(JSON.stringify(data)).digest("hex"),
	status: "updated",
	updatedLocal: updated ?? DateTime.now(),
	updated
});

export class Syncable<T>
{
	protected _id: string;
	public get id ()
	{
		return this._id;
	}

	private _syncProps: SyncProps;
	public get syncProps ()
	{
		return this._syncProps;
	}

	private _data: T;
	public get data ()
	{
		return this._data;
	}

	constructor (private readonly type: ValidTypes, initialData: T, existingSyncProps?: SyncProps)
	{
		this._id = createSyncId(this.type);
		this._data = initialData;
		this._syncProps = existingSyncProps ?? getSyncProps(this.data);
	}

	public hydrate (id: string, data: T, syncProps: SyncProps)
	{
		this._id = id;
		this._data = data;
		this._syncProps = syncProps;
	}

	protected onChange ()
	{
		const update = getSyncUpdate(this.data);

		this._syncProps = {
			...this.syncProps,
			...update
		};
	}

	public update (data: Partial<T>)
	{
		this._data = {
			...this._data,
			...data
		};

		this.onChange();
	}
}

export const createSyncable = <T>(type: ValidTypes, initialData: T) =>
{
	const Class = class extends Syncable<T>
	{
		constructor ()
		{
			super(type, initialData);
		}

		public static fromJson (json: Syncable<T>)
		{
			const instance = new Class();
			instance.hydrate(json.id, json.data, json.syncProps);

			return instance;
		}
	};

	return Class;
};
