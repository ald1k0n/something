'use client';

import { Button } from '@/components/mobile/common';
import { UserContext } from '@/components/mobile/layout/Providers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

import { getUserParkPlaces } from './action';

const User = () => {
	const user = useContext(UserContext);
	const router = useRouter();
	const [parkingPlaces, setParkingPlaces] = useState<any>([]);

	useEffect(() => {
		if (user) {
			(async () => {
				const park = await getUserParkPlaces((user as any).id);
				setParkingPlaces(park);
			})();
		}
	}, [user]);
	return (
		<div className='w-full flex mt-32 items-center text-white'>
			{user ? (
				<div className='w-full justify-center flex flex-col'>
					<div>Добро пожаловать: {(user as any)?.user_name}</div>
					<div className='w-full flex flex-col'>
						Занятые места:
						{parkingPlaces?.map((place: any) => (
							<div
								className='w-12 h-12 border rounded-md flex justify-center items-center'
								key={place.id}>
								{place.section}
								{place.number}
							</div>
						))}
					</div>
				</div>
			) : (
				<div className='w-full flex justify-around items-center'>
					<Button
						className='w-full'
						onClick={() => router.replace('/auth/login')}>
						Войти
					</Button>
					<Link
						className='w-full'
						href='/auth'>
						Зарегистрироваться
					</Link>
				</div>
			)}
		</div>
	);
};

export default User;
