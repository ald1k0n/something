import Image from 'next/image';
import { FC } from 'react';
import Placeholder from '@/public/placeholder.png';
import { IPlaceGet, parkingPlaces } from '@/db/models';

import { eq, count } from 'drizzle-orm';
import { db } from '@/db';

const getParkingCount = async (placeId: number) => {
	const [parkingCount] = await db
		.select({
			count: count(),
		})
		.from(parkingPlaces)
		.where(eq(parkingPlaces.place_id, placeId));

	return parkingCount;
};

interface IProps {
	data: IPlaceGet;
}

export const Card: FC<IProps> = async ({ data }) => {
	const countParking = await getParkingCount(data.id).then((res) => res.count);

	return (
		<div className='w-full h-32 flex gap-4 bg-primary rounded-3xl p-3'>
			<div className='h-full w-24'>
				<Image
					src={Placeholder}
					alt='placeholder'
				/>
			</div>
			<div className='w-full h-full text-white '>
				<div className='font-bold text-lg'>{data.building_name}</div>
				<div className='text-sm'>Адрес: {data.address}</div>
				<div className='text-sm'>Свободных мест: {countParking}</div>
				<div className='text-sm'>Цена: {data.price || 500}</div>
			</div>
		</div>
	);
};
