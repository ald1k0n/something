'use client';

import { Button } from '@/components/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createUser, LoginUser } from '../auth/login/action';

import InputMask from 'react-input-mask';

export default function SignIn() {
	const router = useRouter();
	const [userData, setUserData] = useState({});
	const [isSign, setIsSign] = useState(false);

	const handleSubmit = async () => {
		if (isSign) {
			await createUser(userData).then(console.log);
			// localStorage.setItem('user', JSON.stringify(user));
			setIsSign((prev) => !prev);
		} else {
			const formData = new FormData();
			formData.append('phone_number', userData.phone_number);
			formData.append('password', userData.password);
			console.log(userData);
			const user = await LoginUser(formData, false);
			if (!user.success) {
				alert(user.error);
			} else {
				localStorage.setItem('user', JSON.stringify(user?.user));
			}
		}
	};

	return (
		<main className='w-full h-screen flex  bg-secondary text-white'>
			<section className='container mx-auto flex'>
				<div className='w-1/2 h-full flex justify-center flex-col'>
					<h1 className='font-bold text-5xl'>
						Welcome to ParkSmart
						<br />– Your Gateway to
						<br /> Effortless Parking!
					</h1>
					<div className='text-2xl mt-20'>
						Log in to your account in just a few easy steps to unlock a seamless
						parking experience tailored to your needs.
					</div>
					<div className='w-[260px] mt-20'>
						<Button
							onClick={() => {
								router.back();
							}}>
							GO BACK
						</Button>
					</div>
				</div>
				<div className='w-1/2 h-full flex justify-center items-center'>
					<div className='h-[600px] w-[600px] bg-primary rounded-3xl flex px-12 flex-col justify-center'>
						<div className='font-semibold text-3xl text-center'>
							{isSign ? 'Create an Account' : 'Login'}
						</div>
						<div className='w-full flex flex-col gap-5 mt-8'>
							{!isSign ? (
								<>
									<InputMask
										mask='+79999999999'
										onChange={(e) =>
											setUserData((prev) => ({
												...prev,
												phone_number: e.target.value,
											}))
										}>
										{
											//@ts-ignore
											(inputProps) => (
												<input
													{...inputProps}
													placeholder='Phone number'
													type='text'
													className='w-full h-12 rounded-xl px-1.5 text-black'
												/>
											)
										}
									</InputMask>

									<input
										type='password'
										placeholder='Password'
										onChange={(e) =>
											setUserData((prev) => ({
												...prev,
												password: e.target.value,
											}))
										}
										className='w-full h-12 rounded-xl px-1.5 text-black'
									/>
								</>
							) : (
								<>
									<input
										type='text'
										placeholder='Username'
										className='w-full h-12 rounded-xl px-1.5 text-black'
										onChange={(e) =>
											setUserData((prev) => ({
												...prev,
												user_name: e.target.value,
											}))
										}
									/>

									<InputMask
										mask='+79999999999'
										onChange={(e) =>
											setUserData((prev) => ({
												...prev,
												phone_number: e.target.value,
											}))
										}>
										{
											//@ts-ignore
											(inputProps) => (
												<input
													{...inputProps}
													placeholder='Phone number'
													type='text'
													className='w-full h-12 rounded-xl px-1.5 text-black'
												/>
											)
										}
									</InputMask>
									<input
										type='password'
										placeholder='Password'
										className='w-full h-12 rounded-xl px-1.5 text-black'
										onChange={(e) =>
											setUserData((prev) => ({
												...prev,
												password: e.target.value,
											}))
										}
									/>
									<input
										type='email'
										placeholder='Email'
										className='w-full h-12 rounded-xl px-1.5 text-black'
										onChange={(e) =>
											setUserData((prev) => ({
												...prev,
												email: e.target.value,
											}))
										}
									/>
								</>
							)}
						</div>

						<Button
							onClick={async () => {
								await handleSubmit().then(() => router.replace('/'));
							}}
							className='mt-8'
							types='secondary'>
							Continue
						</Button>
						<Button
							onClick={() => setIsSign((prev) => !prev)}
							types='link'>
							{isSign
								? 'Already have an account? Sign in'
								: "Don't have an account? Create account"}
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
