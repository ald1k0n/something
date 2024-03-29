import type { Metadata } from 'next';
import './globals.css';

import { Montserrat } from 'next/font/google';
import { Footer, Header } from '@/components/ui';

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'Park and book',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Header />
				<main className=''>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
