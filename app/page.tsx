import { Button } from '@/components/ui';
import Hero from '@/public/hero.png';

import ADP from '@/public/ADP.png';
import Khan from '@/public/khan 1.png';
import Mega from '@/public/Мега-силк-вей-logo 1.png';
import Talan from '@/public/Talan-Gallery_logo 1.png';
import Astana from '@/public/Astana.png';
import Parking from '@/public/parking.png';
import Calc from '@/public/calc.png';

import Image from 'next/image';

export default async function Home() {
	return (
		<>
			<section className='w-full h-[800px] bg-secondary'>
				<div className='container mx-auto w-full h-full flex justify-between items-center text-white'>
					<div className='w-[780px] flex flex-col gap-y-14'>
						<div className='font-bold text-6xl'>
							Navigate, Reserve, Relax
							<br /> Your Hassle-Free
							<br /> Parking Solution!
						</div>
						<div className='text-2xl'>
							Try ParkSmart and transform your parking experience – reserve your
							spot effortlessly, navigate stress-free, and enjoy a seamless
							journey every time you park!
						</div>
						<div>
							<Button className='uppercase h-16'>Reserve your spot</Button>
						</div>
					</div>

					<div>
						<Image
							src={Hero}
							alt='Hero'
						/>
					</div>
				</div>
			</section>
			<div className='w-full h-52 flex justify-around items-center'>
				<div className='w-48'>
					<Image
						src={ADP}
						alt='ADP'
					/>
				</div>
				<div className='w-48'>
					<Image
						src={Khan}
						alt='Khan'
					/>
				</div>
				<div className='w-48'>
					<Image
						src={Talan}
						alt='Talan'
					/>
				</div>
				<div className='w-48'>
					<Image
						src={Mega}
						alt='Mega'
					/>
				</div>
			</div>
			<section className='w-full h-screen flex flex-col container mx-auto'>
				<div
					id='about'
					className='font-semibold text-5xl mb-32'>
					About us
				</div>
				<div className='w-full flex gap-8 '>
					<div className='relative'>
						<Image
							src={Astana}
							alt='Astana'
							className='rounded-xl'
						/>

						<Image
							src={Parking}
							alt='Parking'
							className='rounded-xl absolute z-10 top-72 left-96'
						/>
					</div>
					<div className='w-[800px]'>
						<h1 className='font-bold text-5xl whitespace-pre-wrap'>
							{"ParkSmart's Vision for\nSeamless Parking"}
						</h1>
						<p className='font-medium text-xl mt-6'>
							At ParkSmart, we are the driving force behind a seamless and
							stress-free parking experience in the heart of Astana, Kazakhstan.
							Established with a vision to revolutionize urban mobility, we
							pride ourselves on being the go-to solution for modern, efficient,
							and user-centric parking.
						</p>
					</div>
				</div>
			</section>

			<div className='w-full h-[600px] bg-secondary'>
				<div className='container mx-auto flex justify-between gap-24  h-full w-full'>
					<div className='w-[600px] h-full items-center flex'>
						<Image
							className='rounded-t-xl'
							src={Calc}
							alt='Calc'
						/>
					</div>
					<div className='w-full flex justify-center flex-col'>
						<div className='text-[#F1B676] font-bold text-3xl'>
							Our Key Features
						</div>
						<div className='text-white font-bold text-5xl'>
							Value We Give to You
						</div>
						<div className='text-white'>
							We are always ready to help by providing you with the best
							services. We believe that a good mood can make your life better.
						</div>
					</div>
				</div>
			</div>

			<div className='w-full h-[340px] bg-secondary '>
				<section className='w-full h-full container mx-auto gap-16  flex justify-between items-center'>
					<div className='text-2xl w-[920px] text-white'>
						Visit our website and experience hassle-free parking. Simply sign
						up, choose your preferred spot, and reserve it with ease. ParkSmart
						- making parking simpler for you.
					</div>
					<div className='flex w-[428px] gap-11'>
						<Button>Join Today</Button>
						<Button types='white'>Log In</Button>
					</div>
				</section>
			</div>
		</>
	);
}
