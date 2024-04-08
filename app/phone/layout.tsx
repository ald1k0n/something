import { Footer, Header, Providers } from '@/components/mobile';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] });

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<body
			className={`bg-secondary min-h-screen w-full ${montserrat.className}`}>
			<header className='w-full px-4'>
				<Header />
			</header>
			<Providers>
				<main className='mt-14 w-full px-4'>{children}</main>
			</Providers>
			<Footer />
			<div id='portal'></div>
		</body>
	);
};

export default Layout;
