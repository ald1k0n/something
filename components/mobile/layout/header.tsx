'use client';
import Arrow from '@/public/icons/layout/Arrow.svg';
import Settings from '@/public/icons/layout/Settings.svg';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { format } from 'date-fns';

export const Header = () => {
	const router = useRouter();

	return (
		<div className='w-full h-12 rounded-full left-0 fixed mt-12  top-2 bg-primary flex p-3 justify-between items-center text-white'>
			<div className='h-full flex items-center'>
				<div
					className='w-24 cursor-pointer'
					onClick={() => router.back()}>
					<Image
						src={Arrow}
						alt='Arrow'
					/>
				</div>
				<div className='text-base'>Астана</div>
			</div>
			<div className='w-20 border-l-2 h-full border-black flex items-center'>
				<span className='ml-12 text-xs'>{format(new Date(), 'dd.MM')}</span>
			</div>
			<div className='w-12 h-full border-l-2 flex items-center border-black'>
				<Image
					className='ml-5'
					src={Settings}
					alt='Settings'
				/>
			</div>
		</div>
	);
};
