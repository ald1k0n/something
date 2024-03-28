import Arrow from '@/public/icons/layout/Arrow.svg';
import Settings from '@/public/icons/layout/Settings.svg';
import Image from 'next/image';

import { format } from 'date-fns';

export const Header = () => {
	return (
		<header className='w-full h-12 rounded-full left-0 fixed  top-2 bg-primary flex p-3 justify-between items-center'>
			<div className='h-full flex items-center'>
				<div className='w-24'>
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
		</header>
	);
};
