'use client';

import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Input: React.FC<IProps> = ({ label, ...props }) => {
	return (
		<div className='flex flex-col justify-center p-2'>
			{label && <label>{label}</label>}
			<input
				{...props}
				className={`w-full px-1 border-2 border-primary rounded-3xl appearance-none ${props.className}`}
			/>
		</div>
	);
};
