import { Card } from '@/components/mobile';
import { db } from '@/db';
import { IPlaceGet, place } from '@/db/models';

const getPlaces = async (): Promise<IPlaceGet[]> => {
	const places = await db.select().from(place);
	return places;
};

const Mobile = async () => {
	const places = await getPlaces();
	return (
		<section className='w-full'>
			<section className='w-full flex flex-col gap-5 mt-32 text-white'>
				<div>Результаты: {places.length}</div>
				{places.map((place) => (
					<Card
						data={place}
						key={place.id}
					/>
				))}
			</section>
		</section>
	);
};

export default Mobile;
