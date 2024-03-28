import Home from '@/public/icons/layout/House.svg';
import Loupe from '@/public/icons/layout/Loupe.svg';
import Love from '@/public/icons/layout/Love.svg';
import Message from '@/public/icons/layout/Message.svg';
import User from '@/public/icons/layout/User.svg';
import Image from 'next/image';

const icons = [Loupe, Love, Home, Message, User];

const IconsFooter = (icon: any) => {
	return (
		<div>
			<Image
				src={icon.icon.src}
				width={icon.icon.width}
				height={icon.icon.height}
				alt='name'
			/>
		</div>
	);
};

export const Footer = () => {
	return (
		<footer className='w-full h-20 bg-primary fixed bottom-0 flex justify-between items-center p-3'>
			{icons.map((icon, idx) => (
				<IconsFooter
					key={idx}
					icon={icon}
				/>
			))}
		</footer>
	);
};
