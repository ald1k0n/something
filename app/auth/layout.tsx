import React from 'react';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] });

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<body className={montserrat.className}>
			<main>{children}</main>
		</body>
	);
};

export default layout;
