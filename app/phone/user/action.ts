'use server';

import { db } from '@/db';
import { parkingPlaces } from '@/db/models';
import { eq } from 'drizzle-orm';

export const getUserParkPlaces = async (id: number) => {
	const parking_places = await db
		.select()
		.from(parkingPlaces)
		.where(eq(parkingPlaces.owned_by, id));
	return parking_places;
};
