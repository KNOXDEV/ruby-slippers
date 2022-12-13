import type { PageLoad } from './$types';

export const load: PageLoad = function ({ data, url }) {
	return {
		// server.ts loaded data
		...data,
		questions: [
			{
				name: 'costLiving',
				title: 'Cost of Living'
			},
			{
				name: 'youngPopulation',
				title: 'Younger Population'
			}
		].map((q) => ({ ...q, value: url.searchParams.get(q.name) ?? '3' }))
	};
};
