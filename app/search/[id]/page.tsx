import { db } from '@/db';
import { parkingPlaces, place } from '@/db/models';
import { eq } from 'drizzle-orm';
import React, { Fragment } from 'react';
import Link from 'next/link';
import Loupe from '@/public/icons/layout/search.svg';
import { format } from 'date-fns';
import Image from 'next/image';
import { Block } from '@/components/mobile/common';

const getPlace = async (id: number, limit: number = 49, page: number = 0) => {
	const [current] = await db.select().from(place).where(eq(place.id, id));
	const places = await db
		.select()
		.from(parkingPlaces)
		.where(eq(parkingPlaces.place_id, id))
		.limit(limit)
		.offset(page * limit);
	return {
		places,
		current,
	};
};

export default async function Place({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const currentPage = searchParams?.page || 1;
	const data = await getPlace(Number(params.id), 49, Number(currentPage) - 1);

	return (
		<div className='w-full'>
			<section className='w-full h-[500px] bg-secondary flex justify-center items-center flex-col '>
				<div className='font-bold text-5xl text-white text-center w-[1200px] mx-auto'>
					Discover seamless parking with ParkSmart. Where would you like to go
					and park today?
					<br />
					<span className='text-xl font-normal'>
						Ensure your convenience with ParkSmart - a large number of parking
						spaces at your disposal. Find and reserve your ideal parking spot.
						Just enter your destination below and start your hassle-free parking
						experience now!
					</span>
				</div>
				<div className='w-[1143px] h-[86px] px-4  bg-white rounded-2xl text-primary flex text-3xl font-medium items-center'>
					<div className='border-r border-secondary pr-2'>Астана</div>
					<div className='pl-2 border-r pr-2 border-secondary'>
						{format(new Date(), 'dd-MM-yyyy')}
					</div>
					<div className='w-[790px] flex justify-end '>
						<Image
							className='cursor-pointer'
							alt='search'
							src={Loupe}
						/>
					</div>
				</div>
			</section>
			<section className='w-full mt-8 container mx-auto '>
				<div className='text-5xl text-center text-secondary mb-12'>
					{data.current?.building_name}
				</div>
				<div className='flex flex-wrap justify-center gap-24'>
					{data.places.map((place, idx) => (
						<Fragment key={place.id}>
							<Block
								parkingid={place.id}
								number={`${place.section}${place.number}`}
								owned={!!(place.owned_by as number)}
								buildingName={data.current.building_name}
							/>
						</Fragment>
					))}
				</div>
			</section>
		</div>
	);
}
