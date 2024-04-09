'use client';
import { Modal } from '@/components/ui';
import { FC, HTMLAttributes, useState, useContext } from 'react';
import { Input } from './input';
import { Button } from './button';
import { useRouter } from 'next/navigation';
import { UserContext } from '../layout/Providers';
interface IProps extends HTMLAttributes<HTMLDivElement> {
	number: string;
	owned: boolean;
	parkingid: number;
	buildingName: string;
}

export const Block: FC<IProps> = ({
	number,
	owned = false,
	parkingid,
	buildingName,
	...props
}) => {
	const [currentId, setCurrentId] = useState<number | null>(null);
	//@ts-ignore
	const user = useContext(UserContext);
	const router = useRouter();

	const handleConfirm = async (id: number, userId: number) => {
		await fetch('http://localhost:3000/api/parking', {
			method: 'PATCH',
			body: JSON.stringify({ id, userId }),
		})
			.then(console.log)
			.catch(console.log);

		router.refresh();
	};

	return (
		<>
			<div
				{...props}
				onClick={() => setCurrentId(parkingid)}
				className={`text-primary flex h-9 w-9 md:h-16 md:w-16 items-center justify-center rounded-md cursor-pointer ${
					owned ? 'bg-red-400 cursor-not-allowed' : 'bg-[#D9D9D9]'
				}`}>
				{number}
			</div>
			{!!currentId && (
				<Modal>
					<div className='w-full flex flex-col items-center h-full text-primary'>
						<h3 className='text-5xl'>{number}</h3>
						<div className='mt-3'>Подземный паркинг {buildingName}</div>
						<div className='flex flex-col w-full'>
							<Input
								label='Выберите дату'
								type='date'
							/>
							<Input
								label='Выебрите время'
								type='time'
							/>
						</div>
						<div className='w-full relative -bottom-28 p-2 flex justify-between gap-7'>
							<Button
								onClick={() => setCurrentId(null)}
								className='!w-full'
								types='danger'>
								Отменить
							</Button>
							<Button
								onClick={async () => {
									await handleConfirm(parkingid, (user as any).id);
									setCurrentId(null);
								}}
								className='!w-full'>
								Подтвердить
							</Button>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};
