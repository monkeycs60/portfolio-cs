import Image from 'next/image';
import React from 'react';

const TechStack = () => {
	return (
		<div className='w-[65vw] mx-auto relative lg:h-[50vh] pt-[70px] flex flex-col bg-primary text-secondary overflow-hidden'>
			<div className='flex flex-col gap-10 justify-center items-center  bg-red-300'>
				<div className='flex gap-4 font-poppins  w-full'>
					<h3 className='text-xl lg:text-3xl '>Tech Stack</h3>
					<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
				</div>
				<div className='flex gap-8'>
					<div className='w-[400px] h-[140px] bg-green-500 flex items-center justify-center'>
						<Image
							src={'/javascript.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='javascript-tooltip'
							data-tooltip-content='Javascript'
							className='p-1 w-[60px] lg:p-0'
						/>
					</div>
					<div className='w-[400px] h-[140px] bg-green-500 flex items-center justify-center'>
						<Image
							src={'/typescript.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='typescript-tooltip'
							data-tooltip-content='Typescript'
							className='p-1 w-[60px] lg:p-0 '
						/>
					</div>
				</div>
				<div className='flex gap-8'>
					<div className='w-[400px] h-[140px] bg-green-500 flex items-center justify-center'>
						<Image
							src={'/react-text-logo.png'}
							alt='Logo'
							width={1200}
							height={665}
							data-tooltip-id='react-tooltip'
							data-tooltip-content='React'
							className='p-1 w-[60px] lg:p-0 '
						/>
					</div>
					<div className='w-[400px] h-[140px] bg-green-500 flex items-center justify-center'>
						<Image
							src={'/redux-text-logo.png'}
							alt='Logo'
							width={1200}
							height={600}
							data-tooltip-id='redux-tooltip'
							data-tooltip-content='Redux'
							className='p-1 w-[60px] lg:p-0 '
						/>
					</div>
				</div>
				<div className='flex gap-8'>
					<div className='w-[400px] h-[140px] bg-green-500 flex items-center justify-center'>
						<Image
							src={'/node.svg'}
							alt='Logo'
							width={60}
							height={60}
							data-tooltip-id='node-tooltip'
							data-tooltip-content='Node.js'
							className='p-1 w-[60px] lg:p-0'
						/>
					</div>
					<div className='w-[400px] h-[140px] bg-green-500 flex items-center justify-center'>
						<Image
							src={'/next-text-logo.png'}
							alt='Logo'
							width={1200}
							height={719}
							data-tooltip-id='next-tooltip'
							data-tooltip-content='Next.js'
							className='p-1 w-[60px] lg:p-0 '
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
