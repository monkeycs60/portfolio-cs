'use client';

import Link from 'next/link';
import { AlignJustify, GitCompare, GitMerge } from 'lucide-react';
import { useState } from 'react';
import useHamburgerMenu from '@/hooks/useHamburgerMenu';
import Hamburger from './Hamburger';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
	const [isHover, setIsHover] = useState(false);
	const { isHamburgerOpen, toggleHamburgerMenu } = useHamburgerMenu();

	return (
		<>
			<AnimatePresence>
				{/* dark gray overlay */}
				{isHamburgerOpen && (
					<div
						key='hamburgerOverlay'
						className='fixed top-0 left-0 w-screen h-screen bg-black opacity-40 z-[90]'
						onClick={toggleHamburgerMenu}></div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{isHamburgerOpen ? (
					<Hamburger
						key='hamburgerMenu'
						isHamburgerOpen={isHamburgerOpen}
						toggleHamburgerMenu={toggleHamburgerMenu}
					/>
				) : (
					<AlignJustify
						key='alignJustifyIcon'
						className='fixed xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 top-[6vh] right-[8vw] text-yellow-500 z-50 cursor-pointer'
						onClick={toggleHamburgerMenu}
					/>
				)}
			</AnimatePresence>
			{!isHover ? (
				<Link
					href='https://github.com/monkeycs60'
					target='_blank'
					className='z-50'
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}>
					<GitMerge className='hidden lg:block fixed top-[6vh] left-[8vw] text-yellow-500 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 transition-all duration-300' />
				</Link>
			) : (
				<Link
					href='https://github.com/monkeycs60'
					target='_blank'
					className='z-50'
					onMouseLeave={() => setIsHover(false)}>
					<GitCompare
						className='fixed text-yellow-500 top-[6vh] left-[8vw] xl:w-8 xl:h-8 2xl:w-12 2xl:h-12 transition-all duration-300 z-50'
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => {
							setIsHover(false);
						}}
					/>
				</Link>
			)}
		</>
	);
};

export default Navbar;
