'use client';

import { ReactNode, FC, ButtonHTMLAttributes } from 'react';

type IProps = {
	children: ReactNode;
	types?: 'primary' | 'danger';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const typeColors = {
	primary: 'bg-primary',
	danger: 'bg-red-400',
};

export const Button: FC<IProps> = ({
	children,
	types = 'primary',
	...props
}) => {
	return (
		<button
			{...props}
			className={`rounded-3xl ${typeColors[types]} px-2 py-2.5 text-white disabled:bg-gray-400 ${props.className}`}>
			{children}
		</button>
	);
};
