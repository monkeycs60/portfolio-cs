'use client';

import Image from 'next/image';
import { GitMerge, GitCompare } from 'lucide-react';
import clsx from 'clsx';
import { Tooltip } from 'react-tooltip';
import Link from 'next/link';
import { useState } from 'react';

const Hero = () => {
	const [isHover, setIsHover] = useState(false);
	return (
		<div className='w-full h-screen p-4 flex flex-col pt-[20vh] '>
			<div className='flex w-[80vw] h-[35vh] justify-between items-center mx-auto relative'>
				<div className='h-1/2 flex flex-col justify-center items-center w-1/2'>
					<div className='text-6xl font-bold font-poppins text-gray-cool-700 flex flex-col gap-4'>
						<div className='flex gap-4'>
							{!isHover ? (
								<Link
									href='https://github.com/monkeycs60'
									target='_blank'
									onMouseEnter={() => setIsHover(true)}
									onMouseLeave={() => setIsHover(false)}>
									<GitMerge className=' text-yellow-500 lg:w-14 lg:h-14  transition-all duration-300' />
								</Link>
							) : (
								<Link
									href='https://github.com/monkeycs60'
									target='_blank'
									onMouseLeave={() => setIsHover(false)}>
									<GitCompare
										className=' text-yellow-500 lg:w-14 lg:h-14  transition-all duration-300'
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
				<div className='h-1/2 w-1/2  items-end'>
					<Image
						src={'/profil-stack.png'}
						alt='Logo'
						width={531}
						height={423}
						priority={true}
						className={clsx(
							'absolute -bottom-0 right-0',
							'2xl:w-[600px] '
						)}
					/>
				</div>
			</div>
			<div className='max-w-[1200px] text-3xl flex flex-col  mx-auto mt-[6vh] font-circularLight font-light gap-[12vh] tracking-wide'>
				<p>
					Après une reconversion professionnelle, je me suis lancé dans le
					développement web. Spécialisé dans le framework React, je me
					tiens toujours informé des dernières nouveautés en les intégrant
					à mes projets.
				</p>
				<div className='flex gap-[12vw] items-center'>
					<div className='flex gap-4'>
						<h3 className='text-4xl font-bold'>Tech Stack</h3>
						<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
					</div>
					<div className='flex gap-10'>
						<Image
							src={'/javascript.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='javascript-tooltip'
							data-tooltip-content='Javascript'
						/>
						<Image
							src={'/typescript.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='typescript-tooltip'
							data-tooltip-content='Typescript'
						/>
						<Image
							src={'/react.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='react-tooltip'
							data-tooltip-content='React'
						/>
						<Image
							src={'/redux.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='redux-tooltip'
							data-tooltip-content='Redux'
						/>
						<Image
							src={'/nexticon.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='next-tooltip'
							data-tooltip-content='Next.js'
						/>
						<Image
							src={'/node.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='node-tooltip'
							data-tooltip-content='Node.js'
						/>
						<Tooltip id='javascript-tooltip' />
						<Tooltip id='typescript-tooltip' />
						<Tooltip id='react-tooltip' />
						<Tooltip id='redux-tooltip' />
						<Tooltip id='next-tooltip' />
						<Tooltip id='node-tooltip' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
