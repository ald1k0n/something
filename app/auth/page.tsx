'use client';
import { Button, Input } from '@/components/mobile/common';
import { useRouter } from 'next/navigation';
import ReactInputMask from 'react-input-mask';
import { createUser } from './login/action';

export default function SignUp() {
	const router = useRouter();

	return (
		<div>
			<form
				action={async (formData) => {
					const user = await createUser({
						password: formData.get('password') as string,
						phone: formData.get('phone_number') as string,
						user_name: formData.get('user_name') as string,
					});
					console.log(user);
					router.push('/phone');
				}}
				className='w-full min-h-screen flex flex-col items-center mt-24'>
				<div className='font-bold text-5xl'>ParkSmart</div>
				<div className='font-semibold text-4xl mt-16'>Sign Up</div>
				<div className='mt-16 w-80'>
					<Input
						name='user_name'
						label='user name'
						className='h-12'
						placeholder='Enter user name'
					/>
					<ReactInputMask
						mask='+79999999999'
						name='phone_number'>
						{
							//@ts-ignore
							(inputProps: any) => (
								<Input
									{...inputProps}
									label='phone number'
									className='h-12'
									placeholder='Enter phone number'
								/>
							)
						}
					</ReactInputMask>
					<Input
						name='password'
						label='password'
						type='password'
						className='h-12'
						placeholder='Enter password'
					/>
				</div>
				<div className='w-full flex justify-center flex-col items-center'>
					<Button
						type='submit'
						className='w-60 mt-16'
						types='black'>
						Sign Up
					</Button>
					<Button
						onClick={() => router.push('/auth/login')}
						type='button'
						types='link'>
						Login
					</Button>
				</div>
			</form>
		</div>
	);
}
