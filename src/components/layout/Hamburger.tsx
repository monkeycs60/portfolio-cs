'use client';

import { motion } from 'framer-motion';
import { X, Github, Linkedin } from 'lucide-react';
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
		closed: { opacity: 0, x: '85%' },
		exit: { opacity: 0, x: '85%' },
	};
	return (
		<motion.section
			initial='closed'
			animate={isHamburgerOpen ? 'open' : 'closed'}
			exit='exit'
			variants={variants}
			transition={{ duration: 0.5 }}
			className='fixed right-0 top-0 z-[100] h-screen w-[15vw] overflow-hidden bg-secondary text-primary'>
			<div className=' flex flex-col  justify-center gap-[5vh] h-screen items-center text-center  text-lg font-poppins sm:text-2xl '>
				<div className='flex flex-col gap-6'>
					<Link
						href={'#home'}
						className='linkHoverEffect hover:text-yellow-500'
						onClick={toggleHamburgerMenu}>
						Accueil
					</Link>
					<Link
						href={'#about'}
						className='linkHoverEffect hover:text-yellow-500'
						onClick={toggleHamburgerMenu}>
						A propos
					</Link>
					<Link
						href={'#stack'}
						className='linkHoverEffect hover:text-yellow-500'
						onClick={toggleHamburgerMenu}>
						Compétences
					</Link>
					<div className='mt-12'>
						<Link
							href={'#projects'}
							className='linkHoverEffect hover:text-yellow-500'
							onClick={toggleHamburgerMenu}>
							Mes projets
						</Link>
						<div className='flex flex-col border-[1px]  p-4 mt-8 gap-4 '>
							<Link
								href={'https://www.coworkezmalin.com/'}
                                target='_blank'
								className='linkHoverEffect text-lg hover:text-yellow-500'
								onClick={toggleHamburgerMenu}>
								Coworkez Malin
							</Link>
							<Link
								href={'https://restaurant-app-67d7.vercel.app/'}
                                target='_blank'
								className='linkHoverEffect text-lg hover:text-yellow-500'
								onClick={toggleHamburgerMenu}>
								Chiaroscuro
							</Link>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-12'>
					<div className='w-[100%] bg-yellow-500 h-[1px] '></div>
					<Link
						href={'#contact'}
						className='linkHoverEffect hover:text-yellow-500'
						onClick={toggleHamburgerMenu}>
						Contactez-moi
					</Link>
					<div className='w-[100%] bg-yellow-500 h-[1px] '></div>
				</div>

				<div className='flex gap-6'>
					<Link
						href={
							'https://www.linkedin.com/in/cl%C3%A9ment-serizay-044911262/'
						}
						target='_blank'
						className='linkHoverEffect hover:text-yellow-500'
						onClick={toggleHamburgerMenu}>
						<Linkedin className='w-8 h-8' />
					</Link>
					<Link
						href={'https://github.com/monkeycs60'}
						target='_blank'
						className='linkHoverEffect hover:text-yellow-500'
						onClick={toggleHamburgerMenu}>
						<Github className='w-8 h-8' />
					</Link>
				</div>
			</div>
			<X
				size={40}
				className='absolute xl:w-12 xl:h-12 top-16 right-16 text-yellow-500 rotate-90 cursor-pointer'
				onClick={toggleHamburgerMenu}
			/>
		</motion.section>
	);
};

export default Hamburger;