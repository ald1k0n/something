import { Button } from '../common/button';

export const Header = () => {
	return (
		<header className='w-full bg-secondary flex h-28 '>
			<div className='w-full  flex container mx-auto justify-between items-center'>
				<div className='font-bold text-5xl text-white'>ParkSmart</div>
				<div className='w-[600px]'>
					<ul className='w-full flex gap-2 h-full '>
						<li>
							<Button types='link'>About us</Button>
						</li>
						<li>
							<Button types='link'>How it works</Button>
						</li>
						<li>
							<Button types='white'>Log in</Button>
						</li>
						<li>
							<Button>Register</Button>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
