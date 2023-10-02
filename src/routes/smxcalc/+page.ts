import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		difficulty: 15,
		score: 80000
	};
}) satisfies PageLoad;
