import Image from 'next/image';
import React from 'react';
import { Tooltip } from 'react-tooltip';

const HeroBottom = () => {
	return (
		<div className='2xl:max-w-[1000px] 3xl:max-w-[1200px] text-lg lg:text-2xl 3xl:text-3xl flex flex-col  mx-auto mt-[12vh] lg:mt-[10vh] 3xl:mt-[6vh] font-circularLight font-light gap-[7vh] 2xl:gap-[8vh] 3xl:gap-[12vh] tracking-wide'>
			<p className='px-3 lg:px-0 text-justify lg:text-left'>
				Après une reconversion professionnelle, je me suis lancé dans le
				développement web. Spécialisé dans le framework React, je me tiens
				toujours informé des dernières nouveautés en les intégrant à mes
				projets.
			</p>
			<div className='flex lg:flex-row flex-col gap-8 lg:gap-[12vw] xl:gap-[8vw] 3xl:gap[12vw] items-center'>
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
			</div>
		</div>
	);
};

export default HeroBottom;
