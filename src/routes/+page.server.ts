import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const costLiving = parseInt(url.searchParams.get('costLiving') ?? '3');

	return {
		cities: [
			{ name: 'Carmichael, CA' },
			{ name: 'Arlington, VA' },
			{ name: 'San Diego, CA' }
		].slice(0, costLiving)
	};
};
