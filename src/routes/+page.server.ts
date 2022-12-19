import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/db';

export const load: PageServerLoad = async ({ url }) => {
	//const costLiving = parseInt(url.searchParams.get('costLiving') ?? '3');

	const cities = await prisma.places.findMany({
		take: 10,
		select: {
			name: true
		}
	});

	return {
		cities
	};
};
