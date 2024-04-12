'use client';
import { Button, Input } from '@/components/mobile/common';
import { useState } from 'react';
import { LoginUser } from './action';
import { useRouter } from 'next/navigation';
import InputMask from 'react-input-mask';

export default function Login() {
	const [formState, setFormState] = useState<{
		error: string | null;
		success: boolean;
	}>({
		success: false,
		error: null,
	});

	const router = useRouter();

	return (
		<>
			<form
				action={async (formData) => {
					const user = await LoginUser(formData);
					setFormState(user);
					if (user.success) {
						localStorage.setItem('user', JSON.stringify(user.user) as any);
						router.replace('/phone');
					}
				}}
				className='w-full min-h-screen flex flex-col items-center mt-24'>
				<div className='font-bold text-5xl'>ParkSmart</div>
				<div className='font-semibold text-4xl mt-16'>Log In</div>

				<div className='mt-16 w-80'>
					<InputMask
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
					</InputMask>

					<Input
						name='password'
						label='password'
						type='password'
						className='h-12'
						placeholder='Enter password'
					/>
				</div>
				{formState.error && (
					<div className='w-full text-red-500 text-center'>
						{formState.error}
					</div>
				)}
				<div className='w-full flex justify-center'>
					<Button
						type='submit'
						className='w-60 mt-16'
						types='black'>
						Log In
					</Button>
				</div>
			</form>
		</>
	);
}
