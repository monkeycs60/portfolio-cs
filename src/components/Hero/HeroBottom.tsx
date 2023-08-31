import Image from 'next/image';
import React from 'react';
import { Tooltip } from 'react-tooltip';

const HeroBottom = () => {
	return (
		<div className='flex lg:w-[80vw] h-[35vh] gap-16 lg:gap-0 flex-col lg:flex-row justify-between items-center mx-auto relative'>
			<div className='h-1/2 flex flex-col justify-center items-center w-[350px] lg:w-1/2'>
				<div className='font-poppins text-secondary flex flex-col gap-4'>
					<div className='flex gap-4'>
						<div className='flex flex-col gap-2'>
							<h1 className='text-8xl font-semibold'>
								Clément <span className='block uppercase'>Serizay</span>
							</h1>
							<h2 className='text-4xl'>
								Développeur Fullstack Javascript
							</h2>
						</div>
					</div>
				</div>
			</div>
			<p className='px-3 lg:px-0 text-justify lg:text-left'>
				Je cherchais un métier qui me permette de matérialiser mes idées en
				créant des projets. Je cherchais à avoir un impact sur le monde. Je
				suis devenu développeur.
			</p>
			{/* <div className='flex lg:flex-row flex-col gap-8 lg:gap-[12vw] xl:gap-[8vw] 3xl:gap[12vw] items-center'>
				<div className='flex gap-4 '>
					<h3 className='text-xl lg:text-4xl font-bold'>Tech Stack</h3>
					<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
				</div>
				<div className='flex gap-10 flex-wrap lg:flex-nowrap justify-center lg:justify-start'>
					<Image
						src={'/javascript.svg'}
						alt='Logo'
						width={60}
						height={60}
						data-tooltip-id='javascript-tooltip'
						data-tooltip-content='Javascript'
						className='p-1 w-[60px] lg:p-0 '
					/>
					<Image
						src={'/typescript.svg'}
						alt='Logo'
						width={60}
						height={60}
						data-tooltip-id='typescript-tooltip'
						data-tooltip-content='Typescript'
						className='p-1 w-[60px] lg:p-0 '
					/>
					<Image
						src={'/react.svg'}
						alt='Logo'
						width={60}
						height={60}
						data-tooltip-id='react-tooltip'
						data-tooltip-content='React'
						className='p-1 w-[60px] lg:p-0 '
					/>
					<Image
						src={'/redux.svg'}
						alt='Logo'
						width={60}
						height={60}
						data-tooltip-id='redux-tooltip'
						data-tooltip-content='Redux'
						className='p-1 w-[60px] lg:p-0 '
					/>
					<Image
						src={'/nexticon.svg'}
						alt='Logo'
						width={60}
						height={60}
						data-tooltip-id='next-tooltip'
						data-tooltip-content='Next.js'
						className='p-1 w-[60px] lg:p-0 '
					/>
					<Image
						src={'/node.svg'}
						alt='Logo'
						width={60}
						height={60}
						data-tooltip-id='node-tooltip'
						data-tooltip-content='Node.js'
						className='p-1 w-[60px] lg:p-0'
					/>
					<Tooltip id='javascript-tooltip' />
					<Tooltip id='typescript-tooltip' />
					<Tooltip id='react-tooltip' />
					<Tooltip id='redux-tooltip' />
					<Tooltip id='next-tooltip' />
					<Tooltip id='node-tooltip' />
				</div>
			</div> */}
		</div>
	);
};

export default HeroBottom;
