'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
	children: ReactNode;
}

export const Modal: FC<IProps> = ({ children }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	return mounted
		? createPortal(
				<div className='fixed top-0 bg-black bg-opacity-40 w-full min-h-screen flex justify-center items-center p-5'>
					<div className='bg-white w-full h-[480px] rounded-3xl text-black px-4 py-6 overflow-auto flex justify-between'>
						<div className=' h-full border-2 border-primary'></div>
						{children}
						<div className=' h-full border-2 border-primary'></div>
					</div>
				</div>,
				document.getElementById('portal')!
		  )
		: null;
};
