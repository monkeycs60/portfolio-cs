'use client';

import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

export const CoworkezTechnologies = () => {
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
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='front-typescript'
						data-tooltip-content='Typescript'
					/>
					<Image
						src='/react.svg'
						alt='react'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='front-react'
						data-tooltip-content='React'
					/>
					<Image
						src='/redux.svg'
						alt='redux'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='front-redux'
						data-tooltip-content='Redux'
					/>
					<Image
						src='/nexticon.svg'
						alt='nextjs'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='front-nextjs'
						data-tooltip-content='Next.js'
					/>
					<Image
						src='/tailwind.png'
						alt='tailwind'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='front-tailwind'
						data-tooltip-content='Tailwind'
					/>
					<Image
						src='/framer-motion.svg'
						alt='framer'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='front-framer'
						data-tooltip-content='Framer'
					/>
					<Image
						src='/shadcn.png'
						alt='shadcn ui'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='front-shadcn'
						data-tooltip-content='Shadcn ui'
					/>
					<div className='text-lg'>
						<Tooltip id='front-typescript' />
						<Tooltip id='front-react' />
						<Tooltip id='front-redux' />
						<Tooltip id='front-nextjs' />
						<Tooltip id='front-tailwind' />
						<Tooltip id='front-framer' />
						<Tooltip id='front-shadcn' />
					</div>
				</div>
			</div>
			<div className='bg-gray-200 flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:w-[80%] 3xl:w-[100%] justify-start gap-6 lg:gap-2 font-semibold text-lg 2xl:text-xl text-secondary px-4 py-6 lg:px-12 lg:py-6'>
				<h3 className=''>Back-End</h3>
				<div className='flex gap-8 lg:gap-12 justify-center items-center flex-wrap lg:flex-nowrap'>
					<Image
						src='/typescript.svg'
						alt='typescript'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='back-typescript'
						data-tooltip-content='Typescript'
					/>
					<Image
						src='/node.svg'
						alt='node'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='back-node'
						data-tooltip-content='Node'
					/>
					<Image
						src='/postgresql.png'
						alt='postgresql'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='back-postgresql'
						data-tooltip-content='PostgreSQL'
					/>
					<Image
						src='/prisma.png'
						alt='prisma'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='back-prisma'
						data-tooltip-content='Prisma'
					/>
					<Image
						src='/neondb.png'
						alt='neon db'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='back-neondb'
						data-tooltip-content='Neon db'
					/>
					<div className='text-lg'>
						<Tooltip id='back-typescript' />
						<Tooltip id='back-node' />
						<Tooltip id='back-postgresql' />
						<Tooltip id='back-prisma' />
						<Tooltip id='back-neondb' />
					</div>
				</div>
			</div>
			<div className='bg-gray-200 flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:w-[80%] 3xl:w-[100%] justify-start gap-6 lg:gap-4 font-semibold text-lg 2xl:text-xl text-secondary px-4 py-4 lg:px-12 lg:py-6'>
				<h3 className=''>Services</h3>
				<div className='flex gap-8 lg:gap-12 justify-center items-center flex-wrap  lg:flex-nowrap'>
					<Image
						src='/clerk.png'
						alt='clerk'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='services-clerk'
						data-tooltip-content='Clerk'
					/>
					<Image
						src='/places.png'
						alt='google places'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='services-googleplaces'
						data-tooltip-content='Google Maps API'
					/>
					<Image
						src='/aws.png'
						alt='aws'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='services-aws'
						data-tooltip-content='AWS'
					/>
					<Image
						src='/cloudfront.png'
						alt='cloud front'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='services-cloudfront'
						data-tooltip-content='Cloudfront'
					/>
					<Image
						src='/route53.png'
						alt='route 53'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='services-route53'
						data-tooltip-content='Route 53'
					/>
					<Image
						src='/s3.png'
						alt='s3'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='services-s3'
						data-tooltip-content='S3'
					/>
					<Image
						src='/sendgrid.png'
						alt='sendgrid'
						width={60}
						height={60}
						className='w-8 h-8 lg:w-10 lg:h-10'
						data-tooltip-id='services-sendgrid'
						data-tooltip-content='Sendgrid'
					/>
					<div className='text-lg'>
						<Tooltip id='services-clerk' />
						<Tooltip id='services-googleplaces' />
						<Tooltip id='services-aws' />
						<Tooltip id='services-cloudfront' />
						<Tooltip id='services-route53' />
						<Tooltip id='services-s3' />
						<Tooltip id='services-sendgrid' />
					</div>
				</div>
			</div>
		</div>
	);
};
