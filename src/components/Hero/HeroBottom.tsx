import Image from 'next/image';
import React from 'react'
import { Tooltip } from 'react-tooltip';

const HeroBottom = () => {
  return (
		<div className='max-w-[1200px] text-3xl flex flex-col  mx-auto mt-[6vh] font-circularLight font-light gap-[12vh] tracking-wide'>
			<p>
				Après une reconversion professionnelle, je me suis lancé dans le
				développement web. Spécialisé dans le framework React, je me tiens
				toujours informé des dernières nouveautés en les intégrant à mes
				projets.
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
  );
}

export default HeroBottom