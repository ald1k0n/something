import React from 'react';

export const Footer = () => {
	return (
		<footer className='w-full h-[390px] flex justify-center flex-col'>
			<div className='container w-full mx-auto flex justify-between items-center mb-8'>
				<div>FAQ</div>
				<div>About us</div>
				<div>How it works</div>
				<div className='font-bold text-5xl'>ParkSmart</div>
				<div>Sign in</div>
				<div>Contact</div>
				<div>Resources</div>
			</div>
			<hr />
			<div className='container mx-auto w-full flex justify-center'>
				<div className='mt-16'>© 2024 Grizzly group</div>
			</div>
		</footer>
	);
};
