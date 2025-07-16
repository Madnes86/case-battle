import type { PageLoad } from './$types';
import { CASES } from '$lib/data/cases';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const c = CASES.find(c => c.slug === params.slug);

	if (!c) {
		throw error(404, 'Case not found');
	}

	return {
		c
	};
};