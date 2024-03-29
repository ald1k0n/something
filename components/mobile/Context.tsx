import { option } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

export const Context = async ({ children }: { children: React.ReactNode }) => {
	return <SessionProvider>{children}</SessionProvider>;
};
