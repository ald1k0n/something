'use server';

import { db } from '@/db';
import { user } from '@/db/models';
import * as bcryptjs from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

export async function LoginUser(formData: FormData) {
	const usr = {
		phone_number: formData.get('phone_number') as string,
		password: formData.get('password') as string,
	};

	const [candidate] = await db
		.select()
		.from(user)
		.where(eq(user.phone_number, usr.phone_number));

	if (!candidate) redirect('/auth');

	if (!bcryptjs.compareSync(usr.password, candidate.password)) {
		console.log('not');
		return {
			error: 'Пароли не совпадают',
			success: false,
			user: {},
		};
	}

	return {
		error: null,
		success: true,
		user: candidate,
	};
}
