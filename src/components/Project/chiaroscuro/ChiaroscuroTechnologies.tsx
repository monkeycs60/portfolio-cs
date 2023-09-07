'use client';

import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

export const ChiaroscuroTechnologies = () => {
	return (
		<div className='flex flex-col gap-8 font-poppins 2xl:items-center 3xl:items-start '>
			<div className='bg-gray-200 flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:w-[80%] 3xl:w-[100%] justify-start gap-6 lg:gap-4 font-semibold text-lg 2xl:text-xl text-secondary px-4 lg:px-12 py-6'>
				<h3>Front-End</h3>
				<div className='flex gap-8 lg:gap-12 justify-center items-center flex-wrap lg:flex-nowrap'>
					<Image
						src='/typescript.svg'
						alt='typescript'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='front-typescript'
						data-tooltip-content='Typescript'
					/>
					<Image
						src='/react.svg'
						alt='react'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='front-react'
						data-tooltip-content='React'
					/>
					<Image
						src='/tailwind.png'
						alt='tailwind'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='front-tailwind'
						data-tooltip-content='Tailwind'
					/>
					<Image
						src='/framer-motion.svg'
						alt='framer'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='front-framer'
						data-tooltip-content='Framer'
					/>
					<div className='text-lg'>
						<Tooltip id='front-typescript' />
						<Tooltip id='front-react' />
						<Tooltip id='front-tailwind' />
						<Tooltip id='front-framer' />
					</div>
				</div>
			</div>
			<div className='bg-gray-200 flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:w-[80%] 3xl:w-[100%] justify-start gap-6 lg:gap-2 font-semibold text-lg 2xl:text-xl text-secondary px-4 lg:px-12 py-6'>
				<h3 className=''>Back-End</h3>
				<div className='flex gap-8 lg:gap-12 justify-center items-center flex-wrap lg:flex-nowrap'>
					<Image
						src='/typescript.svg'
						alt='typescript'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='back-typescript'
						data-tooltip-content='Typescript'
					/>
					<Image
						src='/node.svg'
						alt='node'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='back-node'
						data-tooltip-content='Node'
					/>
					<Image
						src='/mongodb.png'
						alt='mongodb'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='back-mongodb'
						data-tooltip-content='Mongo DB'
					/>
					<Image
						src='/express.png'
						alt='express'
						width={465}
						height={131}
						className='w-10 lg:w-12 3xl:w-14'
						data-tooltip-id='back-express'
						data-tooltip-content='Express'
					/>
					<div className='text-lg'>
						<Tooltip id='back-typescript' />
						<Tooltip id='back-node' />
						<Tooltip id='back-express' />
						<Tooltip id='back-mongodb' />
					</div>
				</div>
			</div>
			<div className='bg-gray-200 flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:w-[80%] 3xl:w-[100%] justify-start gap-6 lg:gap-4 font-semibold text-lg 2xl:text-xl text-secondary px-4 lg:px-12 py-6'>
				<h3 className=''>Services</h3>
				<div className='flex gap-8 lg:gap-12 justify-center items-center flex-wrap lg:flex-nowrap'>
					<Image
						src='/vite.png'
						alt='vite'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='services-vite'
						data-tooltip-content='Vite'
					/>
					<Image
						src='/vercel-logo.png'
						alt='vercel'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='services-vercel'
						data-tooltip-content='Vercel'
					/>
					<Image
						src='/sendgrid.png'
						alt='sendgrid'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12'
						data-tooltip-id='services-sendgrid'
						data-tooltip-content='Sendgrid'
					/>
					<div className='text-lg'>
						<Tooltip id='services-vite' />
						<Tooltip id='services-vercel' />
						<Tooltip id='services-sendgrid' />
					</div>
				</div>
			</div>
		</div>
	);
};
