'use client';

import { IUserGet } from '@/db/models';
import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const UserContext = createContext<
	| {
			user: any;
	  }
	| {}
>({});

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('user')) {
			const userP = localStorage.getItem('user');
			setUser(JSON.parse(userP!));
		}
	}, []);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
