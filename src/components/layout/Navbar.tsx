'use client';

import Link from 'next/link';
import useScrollControl from '@/hooks/useScrollControl';

import { motion } from 'framer-motion';

const Navbar = () => {
	const { controls } = useScrollControl();

	return (
		<motion.div
			animate={controls}
			className='hidden lg:flex fixed  justify-between lg:w-screen gap-4 lg:gap-0 left-0 top-0 px-[10vw] transition-all duration-300 py-8 3xl:py-12 text-lg xl:text-3xl 3xl:text-4xl tracking-wider z-50 backdrop-blur-md'>
			<Link href='/'>
				Clément <span className='uppercase'>Serizay</span>
			</Link>
			<Link href={'/contact'} className='uppercase'>
				Contactez moi
			</Link>
		</motion.div>
	);
};

export default Navbar;
