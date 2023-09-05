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

export const ChiaroscuroFeatures = () => {
	return (
		<div className='flex flex-col gap-8 font-poppins text-base 2xl:text-xl'>
			<ul className='flex flex-col gap-8'>
				<li className='flex gap-8 '>
					<div>
						-{' '}
						<span className='font-bold underline-offset-2 underline'>
							Système d'authentification
						</span>{' '}
						géré par une librairie tierce, Clerk.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Lock className='w-6 h-6' />
						<Gauge className='w-6 h-6' />
					</div>
				</li>
				<li className='flex gap-8 '>
					<div>
						-{' '}
						<span className='font-bold underline-offset-2 underline'>
							Autocomplétion
						</span>{' '}
						d'input branchée sur l'API Google Places.{' '}
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Waves className='w-6 h-6' />
						<Gauge className='w-6 h-6' />
						<Smile className='w-6 h-6' />
					</div>
				</li>
				<li className='flex gap-8 '>
					<div>
						-{' '}
						<span className='font-bold underline-offset-2 underline'>
							Conversion automatique des images
						</span>{' '}
						fournies par l'API Google & pré-remplissage du formulaire.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Waves className='w-6 h-6' />
						<Gauge className='w-6 h-6' />
						<Smile className='w-6 h-6' />
					</div>
				</li>
				<li className='flex gap-8 justify'>
					<div>
						-{' '}
						<span className='font-bold underline-offset-2 underline'>
							Upload de fichiers
						</span>{' '}
						branché sur un bucket S3 et délivré sur le reste du site via
						le CDN Amazon CloudFront.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Gauge className='w-6 h-6' />
						<Truck className='w-6 h-6' />
						<Lock className='w-6 h-6' />
					</div>
				</li>
				<li className='flex gap-8 justify'>
					<div>
						- Intégration de{' '}
						<span className='font-bold underline-offset-2 underline'>
							Google Maps
						</span>{' '}
						et référencement de tous les lieux ajoutés grâce à leurs
						coordonnées.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Sun className='w-6 h-6' />
						<Smile className='w-6 h-6' />
					</div>
				</li>
				<li className='flex gap-8 justify'>
					<div>
						- Formulaire de contact géré via{' '}
						<span className='font-bold underline-offset-2 underline'>
							SMTP
						</span>{' '}
						(SendGrid)
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Gauge className='w-6 h-6' />
						<Truck className='w-6 h-6' />
					</div>
				</li>
				<li>- et beaucoup à venir....</li>
				<li></li>
			</ul>
		</div>
	);
};

export const ChiaroscuroDescription = () => {
	return (
		<div className='flex flex-col gap-8 font-poppins 2xl:text-xl'>
			<div className='flex flex-col gap-4'>
				<span className='font-semibold text-xl'>Pourquoi ?</span>
				<p>
					Chaque personne qui travaille à distance, en indépendant ou
					déménage dans une nouvelle ville ressent le besoin d'appartenir à
					une communauté, d'échanger avec des pairs et de trouver des
					espaces de travail confortables et abordables. La solitude du
					télétravail peut être pesante, et trouver sa place dans une
					nouvelle ville peut être compliqué.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<span className='font-semibold text-xl'>Comment ?</span>
				<p>
					J'ai remarqué que les espaces 'officiels' de coworking peuvent
					être coûteux et inaccessibles pour beaucoup, notamment pour ceux
					qui lancent une nouvelle activité ou se reconvertissent. Par
					ailleurs, je suis convaincu que chaque ville regorge d'endroits
					non conventionnels mais parfaits pour le coworking - des cafés
					aux lobbies d'hôtels. Cependant, sans une plateforme pour les
					partager, ces spots restent souvent inconnus.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<span className='font-semibold text-xl'>Quoi ?</span>
				<p>
					C'est là que{' '}
					<span className='font-semibold'>coworkezmalin.com</span> entre en
					jeu. Cette plateforme communautaire vous permet de découvrir et
					de partager ces endroits de coworking cachés, abordables et
					conviviaux. Rejoignez une communauté où vous pouvez trouver le
					meilleur endroit pour travailler, rencontrer de nouveaux visages,
					et même partager un verre après le travail.
				</p>
			</div>
		</div>
	);
};

export const ChiaroscuroTechnologies = () => {
	return (
		<div className='flex flex-col gap-8 font-poppins '>
			<div className='bg-gray-200 flex flex-col justify-start gap-4 font-semibold text-lg 2xl:text-2xl text-secondary px-12 py-6'>
				<h3>Front-End</h3>
				<div className='flex gap-12 justify-center items-center '>
					<Image
						src='/typescript.svg'
						alt='typescript'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='front-typescript'
						data-tooltip-content='Typescript'
					/>
					<Image
						src='/react.svg'
						alt='react'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='front-react'
						data-tooltip-content='React'
					/>
					<Image
						src='/redux.svg'
						alt='redux'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='front-redux'
						data-tooltip-content='Redux'
					/>
					<Image
						src='/nexticon.svg'
						alt='nextjs'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='front-nextjs'
						data-tooltip-content='Next.js'
					/>
					<Image
						src='/tailwind.png'
						alt='tailwind'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='front-tailwind'
						data-tooltip-content='Tailwind'
					/>
					<Image
						src='/framer-motion.svg'
						alt='framer'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='front-framer'
						data-tooltip-content='Framer'
					/>
					<Image
						src='/shadcn.png'
						alt='shadcn ui'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
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
			<div className='bg-gray-200 flex flex-col justify-start gap-2 font-semibold text-lg 2xl:text-2xl text-secondary px-12 py-6'>
				<h3 className=''>Back-End</h3>
				<div className='flex gap-12 justify-center items-center'>
					<Image
						src='/typescript.svg'
						alt='typescript'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='back-typescript'
						data-tooltip-content='Typescript'
					/>
					<Image
						src='/node.svg'
						alt='node'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='back-node'
						data-tooltip-content='Node'
					/>
					<Image
						src='/postgresql.png'
						alt='postgresql'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='back-postgresql'
						data-tooltip-content='PostgreSQL'
					/>
					<Image
						src='/prisma.png'
						alt='prisma'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='back-prisma'
						data-tooltip-content='Prisma'
					/>
					<Image
						src='/neondb.png'
						alt='neon db'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
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
			<div className='bg-gray-200 flex flex-col justify-start gap-4 font-semibold text-lg 2xl:text-2xl text-secondary px-12 py-6'>
				<h3 className=''>Services</h3>
				<div className='flex gap-12 justify-center items-center'>
					<Image
						src='/clerk.png'
						alt='clerk'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='services-clerk'
						data-tooltip-content='Clerk'
					/>
					<Image
						src='/places.png'
						alt='google places'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='services-googleplaces'
						data-tooltip-content='Google Maps API'
					/>
					<Image
						src='/aws.png'
						alt='aws'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='services-aws'
						data-tooltip-content='AWS'
					/>
					<Image
						src='/cloudfront.png'
						alt='cloud front'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='services-cloudfront'
						data-tooltip-content='Cloudfront'
					/>
					<Image
						src='/route53.png'
						alt='route 53'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='services-route53'
						data-tooltip-content='Route 53'
					/>
					<Image
						src='/s3.png'
						alt='s3'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
						data-tooltip-id='services-s3'
						data-tooltip-content='S3'
					/>
					<Image
						src='/sendgrid.png'
						alt='sendgrid'
						width={60}
						height={60}
						className='lg:w-12 lg:h-12 3xl:w-14 3xl:h-14'
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
