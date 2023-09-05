'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import ContactButton from './Contact/ContactButton';

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
				<h3 className='text-xl lg:text-2xl 2xl:text-3xl'>Mes contacts</h3>
				<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
			</div>
			<div className='lg:w-[70%] 3xl:w-1/2  flex flex-wrap justify-center mx-auto my-[120px] gap-8 2xl:text-xl'>
				<ContactButton
					Icon={Github}
					label={{ default: 'Github' }}
					link='https://github.com/monkeycs60'
				/>
				<ContactButton
					Icon={Linkedin}
					label={{ default: 'Linkedin' }}
					link='https://www.linkedin.com/in/cl%C3%A9ment-serizay-044911262/'
				/>
				<ContactButton
					Icon={Mail}
					label={{ default: 'Email' }}
					link='mailto:clement.serizay@gmail.com'
				/>
				<ContactButton
					Icon={Phone}
					label={{ default: 'Téléphone', toggled: '06 47 11 76 23' }}
					isToggleable={true}
					isToggled={isClicked}
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default Contact;
