import { Syncable } from "@/contracts/base/Syncable";

interface Conflict<T> {
	local: Syncable<T>;
	remote: Syncable<T>;
}

interface CleanResult<T> {
	outcome: "clean";
	result: Record<string, Syncable<T>>;
}

interface ConflictResult<T> {
	outcome: "conflict";
	conflicts: Record<string, Conflict<T>>;
}

type ReconciliationResult<T> = ConflictResult<T> | CleanResult<T>;

export abstract class Syncer<T> {
	private async fetchRemoteForReconcile(local: Syncable<T>[]) {
		const remoteVersionPromises = local.map((l) => this.tryFetchRemote(l));
		const remoteVersions = await Promise.allSettled(remoteVersionPromises);

		const rejected = remoteVersions.filter((r) => r.status === `rejected`);
		if (rejected.length > 0) {
			console.error(`Failed to fetch remote versions: `, rejected);

			throw new Error(`Failed to fetch remote versions`);
		}

		const fulfilled = remoteVersions as PromiseFulfilledResult<Syncable<T>>[];

		return fulfilled.map((r) => r.value);
	}

	protected async reconcile(local: Syncable<T>[]): Promise<ReconciliationResult<T>> {
		const remote = await this.fetchRemoteForReconcile(local);

		const localMap = this.syncablesToMap(local);
		const remoteMap = this.syncablesToMap(remote);

		const conflictKeys = Object.keys(localMap).filter((k) => k in remoteMap);
		let conflicts: Record<string, Conflict<T>> | undefined;
		if (conflictKeys.length) {
			conflicts = {};

			conflictKeys.forEach((k) => {
				conflicts![k] = {
					local: localMap[k],
					remote: remoteMap[k],
				};
			});
		}

		return conflictKeys.length > 0
			? ({
					outcome: `conflict`,
					conflicts,
			  } as ConflictResult<T>)
			: ({
					outcome: `clean`,
					result: {
						...localMap,
						...remoteMap,
					},
			  } as CleanResult<T>);
	}

	private syncablesToMap(from: Syncable<T>[]) {
		return from.reduce((acc, item) => {
			acc[item.id] = item;
			return acc;
		}, {} as Record<string, Syncable<T>>);
	}

	protected abstract tryFetchRemote(local: Syncable<T>): Promise<Syncable<T>>;
}
