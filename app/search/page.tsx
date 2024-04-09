import React from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import Loupe from '@/public/icons/layout/search.svg';
import { db } from '@/db';
import { place } from '@/db/models';
import { Card } from '@/components/mobile';

const getPlaces = async () => {
	const places = await db.select().from(place);
	return places;
};

export default async function Search() {
	const places = await getPlaces();

	return (
		<main className='w-full'>
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
			<section className='w-full h-screen container mx-auto'>
				<div className='w-full mt-12'>
					<div className='text-secondary font-semibold text-3xl'>Results:</div>
					<div className='w-full mt-12'>
						{places.map((place) => {
							return (
								<Card
									isWeb
									data={place}
									key={place.id}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}
