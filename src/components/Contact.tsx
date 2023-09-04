'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
	const [isClicked, setIsClicked] = useState(false);
	const handleClick = () => {
		setIsClicked(!isClicked);
	};
	return (
		<div
			id='contact'
			className='w-[65%] mx-auto font-poppins py-[5vh] flex flex-col'>
			<div className='flex gap-4 font-poppins w-full'>
				<h3 className='text-xl lg:text-3xl '>Mes contacts</h3>
				<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
			</div>
			<div className='w-1/2  flex flex-wrap justify-center mx-auto my-[120px] gap-8 text-xl'>
				<Link href={'https://github.com/monkeycs60'} target='_blank'>
					<button
						className={clsx(
							'w-[400px] h-[90px] flex justify-center items-center gap-4 font-poppins px-8 py-4 bg-secondary text-tercary border-secondary border-[2px]',
							' hover:text-secondary hover:bg-primary'
						)}>
						<Github />
						<span>Github</span>
					</button>
				</Link>
				<Link
					href={
						'https://www.linkedin.com/in/cl%C3%A9ment-serizay-044911262/'
					}
					target='_blank'>
					<button
						className={clsx(
							'w-[400px] h-[90px] flex justify-center items-center gap-4 font-poppins px-8 py-4 bg-secondary text-tercary border-secondary border-[2px]',
							' hover:text-secondary hover:bg-primary'
						)}>
						<Linkedin />
						<span>Linkedin</span>
					</button>
				</Link>
				<Link href={'mailto:clement.serizay@gmail.com'} target='_blank'>
					<button
						className={clsx(
							'w-[400px] h-[90px] flex justify-center items-center gap-4 font-poppins px-8 py-4 bg-secondary text-tercary border-secondary border-[2px]',
							' hover:text-secondary hover:bg-primary'
						)}>
						<Mail />
						<span>Email</span>
					</button>
				</Link>
				<button
					className={clsx(
						'w-[400px] h-[90px] flex justify-center items-center gap-4 font-poppins px-8 py-4 bg-secondary text-tercary border-secondary border-[2px]',
						' hover:text-secondary hover:bg-primary'
					)}
					onClick={handleClick}>
					<Phone />
					<span>{isClicked ? '06 47 11 76 23' : 'Téléphone'}</span>
				</button>
			</div>
		</div>
	);
};

export default Contact;
