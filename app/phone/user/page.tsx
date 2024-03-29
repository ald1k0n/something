'use client';

import { Button } from '@/components/mobile/common';
import { UserContext } from '@/components/mobile/layout/Providers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

const User = () => {
	const user = useContext(UserContext);
	const router = useRouter();

	console.log(user);

	return (
		<div className='w-full flex justify-center mt-16 text-white'>
			{user ? (
				<div>Добро пожаловать: </div>
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
