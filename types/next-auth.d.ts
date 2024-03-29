import 'next-auth';
import { IUserGet } from '@/db/models';

declare module 'next-auth' {
	interface User {
		id: number;
		phone: string;
		username: string;
		password?: string;
	}

	interface Session {
		user: {
			id: number;
			username: string;
			phone: string;
		};
	}

	interface JWT {
		id: number;
		username: string;
		phone: string;
	}
}
