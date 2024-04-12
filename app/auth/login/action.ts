'use server';

import { db } from '@/db';
import { IUserCreate, user } from '@/db/models';
import * as bcryptjs from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

export async function LoginUser(formData: FormData, isMobile: boolean = true) {
	const usr = {
		phone_number: formData.get('phone_number') as string,
		password: formData.get('password') as string,
	};
	console.log(usr);
	const [candidate] = await db
		.select()
		.from(user)
		.where(eq(user.phone_number, usr.phone_number));

	if (!candidate) {
		if (isMobile) redirect('/auth');
	}
	console.log(candidate);
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

export async function createUser(usr: {
	password: string;
	phone: string;
	user_name: string;
}) {
	const values: IUserCreate = {
		password: usr.password,
		phone_number: usr.phone,
		user_name: usr.user_name,
	};

	const candidate = await db
		.select()
		.from(user)
		.where(eq(user.phone_number, values.phone_number));

	console.log(candidate);

	if (candidate.length > 0) return;
	values.password = bcryptjs.hashSync(values.password, 7);
	console.log(values);
	const [payload] = await db.insert(user).values(values).returning({
		id: user.id,
		phone_number: user.phone_number,
		user_name: user.user_name,
	});
	return payload;
}
