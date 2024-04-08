import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

const button_types = {
	primary: 'bg-primary text-white',
	link: 'text-white',
	white: 'bg-white text-primary',
	secondary: 'bg-secondary text-white',
};

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	types?: 'primary' | 'link' | 'white' | 'secondary';
}

export const Button: FC<IProps> = ({
	children,
	types = 'primary',
	...props
}) => {
	return (
		<button
			{...props}
			className={`${props.className} rounded-md py-2.5 px-8 ${button_types[types]}`}>
			{children}
		</button>
	);
};
