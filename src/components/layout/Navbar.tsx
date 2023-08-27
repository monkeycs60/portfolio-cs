'use client';

import Link from 'next/link';
import useScrollControl from '@/hooks/useScrollControl';

import { motion } from 'framer-motion';

const Navbar = () => {
	const { controls } = useScrollControl();

	return (
		<motion.div
			animate={controls}
			className='fixed flex justify-between lg:w-screen left-0 top-0 px-[10vw] transition-all duration-300 py-12 text-4xl tracking-wider z-50 backdrop-blur-md'>
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
