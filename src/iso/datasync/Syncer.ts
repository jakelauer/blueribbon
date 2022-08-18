import { HasSyncProps } from '@/contracts/base/Syncable';

interface Conflict<T> {
	local: HasSyncProps<T>;
	remote: HasSyncProps<T>;
}

interface CleanResult<T> {
	outcome: "clean";
	result: Record<string, HasSyncProps<T>>;
}

interface ConflictResult<T> {
	outcome: "conflict";
	conflicts: Record<string, Conflict<T>>;
}

type ReconciliationResult<T> = ConflictResult<T> | CleanResult<T>;

export abstract class Syncer<T>
{
	private async fetchRemoteForReconcile (local: HasSyncProps<T>[])
	{
		const remoteVersionPromises = local.map(l => this.tryFetchRemote(l));
		const remoteVersions = await Promise.allSettled(remoteVersionPromises);

		const rejected = remoteVersions.filter(r => r.status === `rejected`);
		if (rejected.length > 0)
		{
			console.error(`Failed to fetch remote versions: `, rejected);

			throw new Error(`Failed to fetch remote versions`);
		}

		const fulfilled = remoteVersions as PromiseFulfilledResult<
			HasSyncProps<T>
		>[];

		return fulfilled.map(r => r.value);
	}

	protected async reconcile (
		local: HasSyncProps<T>[]
	): Promise<ReconciliationResult<T>>
	{
		const remote = await this.fetchRemoteForReconcile(local);

		const localMap = this.syncablesToMap(local);
		const remoteMap = this.syncablesToMap(remote);

		const conflictKeys = Object.keys(localMap).filter(k => k in remoteMap);
		let conflicts: Record<string, Conflict<T>> | undefined;
		if (conflictKeys.length)
		{
			conflicts = {};

			conflictKeys.forEach(k =>
			{
				conflicts![k] = {
				  local: localMap[k],
				  remote: remoteMap[k]
				};
			});
		}

		return conflictKeys.length > 0
			? ({
				outcome: `conflict`,
				conflicts
			  } as ConflictResult<T>)
			: ({
				outcome: `clean`,
				result: {
					...localMap,
					...remoteMap
				}
			  } as CleanResult<T>);
	}

	private syncablesToMap (from: HasSyncProps<T>[])
	{
		return from.reduce((acc, item) =>
		{
			acc[item.id] = item;
			return acc;
		}, {} as Record<string, HasSyncProps<T>>);
	}

	protected abstract tryFetchRemote(local: HasSyncProps<T>): Promise<HasSyncProps<T>>;
}
