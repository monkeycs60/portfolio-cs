'use client';

import Link from 'next/link';
import { AlignJustify, GitCompare, GitMerge } from 'lucide-react';
import { useState } from 'react';
import useHamburgerMenu from '@/hooks/useHamburgerMenu';
import Hamburger from './Hamburger';

const Navbar = () => {
	const [isHover, setIsHover] = useState(false);
	const { isHamburgerOpen, toggleHamburgerMenu } = useHamburgerMenu();

	return (
		<>
			{isHamburgerOpen && (
				<div
					className='fixed top-0 left-0 w-screen h-screen bg-black opacity-40 z-[90]'
					onClick={() => {
						toggleHamburgerMenu();
					}}></div>
			)}
			{isHamburgerOpen ? (
				<Hamburger
					isHamburgerOpen={isHamburgerOpen}
					toggleHamburgerMenu={toggleHamburgerMenu}
				/>
			) : (
				<AlignJustify
					className='fixed xl:w-10 xl:h-10 top-[6vh] right-[8vw] text-yellow-500 z-50 cursor-pointer'
					onClick={toggleHamburgerMenu}
				/>
			)}
			{!isHover ? (
				<Link
					href='https://github.com/monkeycs60'
					target='_blank'
					className='z-50'
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}>
					<GitMerge className='fixed top-[6vh] left-[8vw] text-yellow-500 xl:w-12 xl:h-12 transition-all duration-300' />
				</Link>
			) : (
				<Link
					href='https://github.com/monkeycs60'
					target='_blank'
					className='z-50'
					onMouseLeave={() => setIsHover(false)}>
					<GitCompare
						className='fixed text-yellow-500 top-[6vh] left-[8vw] xl:w-12 xl:h-12 transition-all duration-300 z-50'
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
