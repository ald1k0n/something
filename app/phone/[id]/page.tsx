import { db } from '@/db';
import { parkingPlaces, place } from '@/db/models';
import { eq } from 'drizzle-orm';
import React from 'react';

const getPlace = async (id: number) => {
	const [current] = await db.select().from(place).where(eq(place.id, id));
	const places = await db
		.select()
		.from(parkingPlaces)
		.where(eq(parkingPlaces.place_id, id));
	return {
		places,
		current,
	};
};

export default async function Parking({
	params,
}: {
	[x: string]: { id: string };
}) {
	const data = await getPlace(Number(params.id));
	console.log(data);
	return <div>page</div>;
}
