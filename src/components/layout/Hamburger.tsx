'use client';

import { motion } from 'framer-motion';
import { X, AlignJustify } from 'lucide-react';
import Link from 'next/link';

interface HamburgerProps {
	isHamburgerOpen: boolean;
	toggleHamburgerMenu: () => void;
}
const Hamburger = ({
	isHamburgerOpen,
	toggleHamburgerMenu,
}: HamburgerProps) => {
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: '70%' },
		exit: { opacity: 0, x: '70%' },
	};
	return (
		<motion.section
			initial='closed'
			animate={isHamburgerOpen ? 'open' : 'closed'}
			exit='exit'
			variants={variants}
			transition={{ duration: 0.5 }}
			className='fixed right-0 top-0 z-[100] h-screen w-[30vw] overflow-hidden bg-secondary text-primary font-inter'>
			<div className=' flex h-full flex-col  justify-center py-12 p items-center  text-lg font-semibold sm:text-xl '>
				<div className='flex flex-col gap-6'>
					<Link
						href={'/about'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						A propos
					</Link>
					<Link
						href={'/'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						FAQ
					</Link>
					<Link
						href={'/ajouter-spot'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						Explorer
					</Link>
					<Link
						href={'/ajouter-spot'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						Ajouter un spot
					</Link>
				</div>
			</div>
			<X
				size={40}
				className='absolute xl:w-12 xl:h-12 top-16 right-16 text-yellow-500 rotate-90'
				onClick={toggleHamburgerMenu}
			/>
		</motion.section>
	);
};

export default Hamburger;
