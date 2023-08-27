import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='fixed flex justify-between lg:w-screen left-0 top-0 px-[10vw] py-12 text-4xl tracking-wider z-50 '>
			<Link href='/'>
				Clément <span className='uppercase'>Serizay</span>
			</Link>
			<Link href={'/contact'} className='uppercase'>
				Contactez moi
			</Link>
		</div>
	);
};

export default Navbar;
