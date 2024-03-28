import { Footer, Header } from '@/components/mobile';
import { ReactNode } from 'react';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<body className='w-full min-h-screen bg-secondary'>
			<header className='w-full px-4'>
				<Header />
			</header>
			<main className='w-full mt-14 px-4'>{children}</main>
			<Footer />
			<div id='portal'></div>
		</body>
	);
};

export default Layout;
