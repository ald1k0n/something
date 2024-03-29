import { Button, Input } from '@/components/mobile/common';
import { db } from '@/db';
import { user } from '@/db/models';
import * as bcryptjs from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

export default function SignUp() {
	async function SignUpUser(formData: FormData) {
		'use server';

		let usr = {
			user_name: formData.get('user_name') as string,
			phone_number: formData.get('phone_number') as string,
			password: formData.get('password') as string,
		};

		const candidate = await db
			.select()
			.from(user)
			.where(eq(user.phone_number, usr.phone_number));

		console.log(candidate);

		if (candidate.length > 0) return;
		usr.password = bcryptjs.hashSync(usr.password, 7);
		console.log(usr);
		const [payload] = await db.insert(user).values(usr).returning({
			id: user.id,
			phone_number: user.phone_number,
			user_name: user.user_name,
		});

		console.log(payload);
		redirect('/auth/login');
	}

	return (
		<div>
			<form
				action={SignUpUser}
				className='w-full min-h-screen flex flex-col items-center mt-24'>
				<div className='font-bold text-5xl'>ParkSmart</div>
				<div className='font-semibold text-4xl mt-16'>Sign Up</div>
				<div className='mt-16 w-80'>
					<Input
						name='user_name'
						label='phone name'
						className='h-12'
						placeholder='Enter user name'
					/>
					<Input
						name='phone_number'
						label='phone number'
						className='h-12'
						placeholder='Enter phone number'
					/>
					<Input
						name='password'
						label='password'
						type='password'
						className='h-12'
						placeholder='Enter password'
					/>
				</div>
				<div className='w-full flex justify-center'>
					<Button
						type='submit'
						className='w-60 mt-16'
						types='black'>
						Log In
					</Button>
				</div>
			</form>
		</div>
	);
}
