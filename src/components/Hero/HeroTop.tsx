import clsx from 'clsx';
import { GitCompare, GitMerge } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const HeroTop = () => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div className='flex lg:w-[80vw] h-[35vh] gap-16 lg:gap-0 flex-col lg:flex-row justify-between items-center mx-auto relative'>
			<div className='h-1/2 flex flex-col justify-center items-center w-[350px] lg:w-1/2'>
				<div className='text-2xl 2xl:text-5xl 3xl:text-6xl font-bold font-poppins text-gray-cool-700 flex flex-col gap-4'>
					<div className='flex gap-4'>
						{!isHover ? (
							<Link
								href='https://github.com/monkeycs60'
								target='_blank'
								onMouseEnter={() => setIsHover(true)}
								onMouseLeave={() => setIsHover(false)}>
								<GitMerge className='hidden lg:block text-yellow-500 w-8 h-8 translate-y-1 lg:w-14 lg:h-14  transition-all duration-300' />
							</Link>
						) : (
							<Link
								href='https://github.com/monkeycs60'
								target='_blank'
								onMouseLeave={() => setIsHover(false)}>
								<GitCompare
									className='hidden lg:block text-yellow-500 translate-y-1 w-8 h-8 lg:w-14 lg:h-14  transition-all duration-300'
									onMouseEnter={() => setIsHover(true)}
									onMouseLeave={() => {
										setIsHover(false);
									}}
								/>
							</Link>
						)}
						<div className='flex flex-col gap-2'>
							<h1>Clément Serizay,</h1>
							<h2>Développeur Fullstack</h2>
						</div>
					</div>
				</div>
			</div>
			<div className='h-1/2 lg:w-1/2 items-end'>
				<Image
					src={'/profil-stack.png'}
					alt='Logo'
					width={531}
					height={423}
					priority={true}
					className={clsx(
						' w-[250px] ',
						'xl:w-[530px] xl:absolute -bottom-16 right-0',
						'3xl:w-[600px] 3xl:-bottom-0 '
					)}
				/>
			</div>
		</div>
	);
};

export default HeroTop;
