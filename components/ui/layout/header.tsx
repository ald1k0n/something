'use client';

import { Button } from '../common/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const localUser = localStorage.getItem('user');
		if (localUser) {
			setUser(JSON.parse(localUser));
		}
	}, []);

	return (
		<header className='w-full lg:flex hidden bg-secondary  h-28 '>
			<div className='w-full  flex container mx-auto justify-between items-center'>
				<div className='font-bold text-5xl text-white'>ParkSmart</div>
				<div className='w-[600px]'>
					<ul className='w-full flex gap-2 h-full '>
						<li>
							<Button types='link'>About us</Button>
						</li>
						<li>
							<Button types='link'>How it works</Button>
						</li>
						{!user ? (
							<>
								<li>
									<Link href={'/sign-in'}>
										<Button types='white'>Log in</Button>
									</Link>
								</li>
								<li>
									<Link href={'/sign-in'}>
										<Button>Register</Button>
									</Link>
								</li>
							</>
						) : (
							<li>
								<Button types='link'>Search</Button>
							</li>
						)}
					</ul>
				</div>
			</div>
		</header>
	);
};
