'use client';

import Link from 'next/link';
import { AlignJustify, GitCompare, GitMerge } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
	const [isHover, setIsHover] = useState(false);

	return (
		<>
			<AlignJustify className='fixed xl:w-10 xl:h-10 top-[6vh] right-[8vw] text-yellow-500 z-50' />
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
