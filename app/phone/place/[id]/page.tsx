import { db } from '@/db';
import { parkingPlaces, place } from '@/db/models';
import { Button, Block } from '@/components/mobile/common';
import { eq } from 'drizzle-orm';
import Arrow from '@/public/icons/layout/Arrow.svg';
import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default async function Parking({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const currentPage = searchParams?.page || 1;
	const data = await getPlace(Number(params.id), 49, Number(currentPage) - 1);

	return (
		<main className='flex w-full flex-col items-center py-4 text-white'>
			<div className='text-2xl'>{data.current?.building_name}</div>
			<section className='mt-6 flex w-full justify-around'>
				<Link href='?page=1'>
					<Button type='button'>
						<div className='flex w-32 justify-between gap-3'>
							<div>
								<Image
									src={Arrow}
									alt='Previous'
								/>
							</div>
							<div>Zone 1</div>
							<div></div>
						</div>
					</Button>
				</Link>

				<Link href='?page=2'>
					<Button type='button'>
						<div className='flex w-32 justify-between gap-3'>
							<div></div>
							<div>Zone 2</div>
							<div>
								<Image
									src={Arrow}
									alt='Next'
									className='-rotate-180'
								/>
							</div>
						</div>
					</Button>
				</Link>
			</section>

			<section className='mt-14 flex h-full w-full flex-wrap justify-center gap-4'>
				{data.places.map((place, idx) => (
					<Fragment key={place.id}>
						<Block
							parkingid={place.id}
							number={`${place.section}${place.number}`}
							owned={!!(place.owned_by as number)}
							buildingName={data.current.building_name}
						/>
						{(idx + 1) % 14 === 0 && <div className='w-full h-6' />}
					</Fragment>
				))}
			</section>
		</main>
	);
}
