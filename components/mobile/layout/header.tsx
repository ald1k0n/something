'use client';
import Arrow from '@/public/icons/layout/Arrow.svg';
import Settings from '@/public/icons/layout/Settings.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Button, Modal } from '@/components/ui';

export const Header = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className='w-full h-12 rounded-full left-0  mt-12   bg-primary flex p-3 justify-between items-center text-white'>
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
				<div
					onClick={() => setOpen(true)}
					className='w-12 h-full border-l-2 flex items-center border-black'>
					<Image
						className='ml-5'
						src={Settings}
						alt='Settings'
					/>
				</div>
			</div>

			{open && (
				<Modal>
					<div className='w-full h-full flex flex-col justify-between px-2'>
						<div className='text-center'>Фильтр</div>
						<div className='w-full flex justify-center'>
							<div className='w-full h-full'>
								<label htmlFor=''>Город:</label>
								<select className='w-full border'>
									<option
										disabled
										selected
										value=''>
										Выберите город
									</option>
									<option value=''>Астана</option>
								</select>
							</div>
						</div>
						<div className='w-full flex justify-center gap-3'>
							<Button
								onClick={() => setOpen(false)}
								types='primary'>
								Применить
							</Button>
							<Button
								onClick={() => setOpen(false)}
								types='secondary'>
								Отменить
							</Button>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};
