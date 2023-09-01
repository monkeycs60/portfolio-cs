import Image from 'next/image';
import React from 'react';

const TechStack = () => {
	return (
		<div className='w-[65vw] mx-auto relative lg:h-[50vh] p-4 flex flex-col bg-primary text-secondary overflow-hidden'>
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
					src={'/react-text-logo.png'}
					alt='Logo'
					width={1200}
					height={665}
					data-tooltip-id='react-tooltip'
					data-tooltip-content='React'
					className='p-1 w-[60px] lg:p-0 '
				/>
				<Image
					src={'/redux-text-logo.png'}
					alt='Logo'
					width={1200}
					height={600}
					data-tooltip-id='redux-tooltip'
					data-tooltip-content='Redux'
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
	);
};

export default TechStack;
