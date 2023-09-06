'use client';

import { Tooltip } from 'react-tooltip';

import {
	Lock,
	Gauge,
	Waves,
	Smile,
	ArrowBigRight,
	Sun,
	HeartHandshake,
	Truck,
} from 'lucide-react';
import Image from 'next/image';

export const CoworkezFeatures = () => {
	return (
		<div className='flex flex-col gap-8 font-poppins text-sm lg:text-base 2xl:text-md'>
			<ul className='flex flex-col gap-8'>
				<li className='flex gap-8 '>
					<div>
						<span className='mr-2'>&bull;</span>
						<span className='font-bold underline-offset-2 underline'>
							Système d'authentification
						</span>{' '}
						géré par une librairie tierce, Clerk.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Lock className='w-4 h-4 lg:w-6 lg:h-6' />
						<Gauge className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li className='flex gap-8 '>
					<div>
						<span className='mr-2'>&bull;</span>
						<span className='font-bold underline-offset-2 underline'>
							Autocomplétion
						</span>{' '}
						d'input branchée sur l'API Google Places.{' '}
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Waves className='w-4 h-4 lg:w-6 lg:h-6' />
						<Gauge className='w-4 h-4 lg:w-6 lg:h-6' />
						<Smile className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li className='flex gap-8 '>
					<div>
						<span className='mr-2'>&bull;</span>
						<span className='font-bold underline-offset-2 underline'>
							Conversion automatique des images
						</span>{' '}
						fournies par l'API Google & pré-remplissage du formulaire.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Waves className='w-4 h-4 lg:w-6 lg:h-6' />
						<Gauge className='w-4 h-4 lg:w-6 lg:h-6' />
						<Smile className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li className='flex gap-8 justify'>
					<div>
						<span className='mr-2'>&bull;</span>
						<span className='font-bold underline-offset-2 underline'>
							Upload de fichiers
						</span>{' '}
						branché sur un bucket S3 et délivré sur le reste du site via
						le CDN Amazon CloudFront.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Gauge className='w-4 h-4 lg:w-6 lg:h-6' />
						<Truck className='w-4 h-4 lg:w-6 lg:h-6' />
						<Lock className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li className='flex gap-8 justify'>
					<div>
						<span className='mr-2'>&bull;</span> Intégration de{' '}
						<span className='font-bold underline-offset-2 underline'>
							Google Maps
						</span>{' '}
						et référencement de tous les lieux ajoutés grâce à leurs
						coordonnées.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Sun className='w-4 h-4 lg:w-6 lg:h-6' />
						<Smile className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li className='flex gap-8 justify'>
					<div>
						<span className='mr-2'>&bull;</span> Formulaire de contact
						géré via{' '}
						<span className='font-bold underline-offset-2 underline'>
							SMTP
						</span>{' '}
						(SendGrid)
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Gauge className='w-4 h-4 lg:w-6 lg:h-6' />
						<Truck className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li>et beaucoup à venir....</li>
				<li></li>
			</ul>
		</div>
	);
};

export const CoworkezDescription = () => {
	return (
		<div className='flex flex-col gap-8  font-poppins text-sm lg:text-base 2xl:text-md'>
			<div className='flex flex-col gap-4 2xl:leading-7'>
				<p>
					Quand j'ai commencé ma formation à distance dans une ville que je
					ne connaissais pas, je me suis assez vite senti tourner en rond.
					Les journées étaient longues, et bien que passionné par mon
					apprentissage, il me manquait ce petit brin de convivialité, ces
					échanges avec des personnes qui partagent les mêmes défis. J'ai
					cherché des espaces de coworking, mais entre ceux trop chers et
					ceux toujours bondés, je n'étais pas satisfait.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<p>
					Et puis, une idée m'est venue : il y avait sûrement des coins
					cachés de cette ville, des endroits où je pourrais à la fois
					travailler tranquillement et rencontrer des gens sympas, et ce
					sans me ruiner. Du coup, armé de détermination, j'ai créé
					l'application fullstack Coworkez Malin.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<p>
					<span className='font-semibold'>coworkezmalin.com</span>,c'est un
					peu le fruit de ma propre quête : un guide pour trouver les
					meilleurs spots pour bosser, mais aussi un lieu pour connecter
					les gens. Alors, si toi aussi tu cherches à donner un peu de
					chaleur à tes journées de travail à distance, viens !
				</p>
			</div>
		</div>
	);
};

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
