import type { PageLoad } from './$types';
import pizza from '$lib/data/pizza.json';

export const load = (async () => {
	return { pizza };
}) satisfies PageLoad;
