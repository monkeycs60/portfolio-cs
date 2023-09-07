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

export const ChiaroscuroFeatures = () => {
	return (
		<div className='flex flex-col gap-8 font-poppins text-sm lg:text-base 2xl:text-md'>
			<ul className='flex flex-col gap-8'>
				<li className='flex gap-8 '>
					<div>
						<span className='mr-2'>&bull;</span>
						<span className='font-bold underline-offset-2 underline'>
							Authentification
						</span>{' '}
						maison en JWT.
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Lock className='w-4 h-4 lg:w-6 lg:h-6' />
						<HeartHandshake className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li className='flex gap-8 '>
					<div>
						<span className='mr-2'>&bull;</span>
						<span className='font-bold underline-offset-2 underline'>
							Formulaire multi-step
						</span>{' '}
						d'inscription / connexion / réservation{' '}
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
							Système de réservation{' '}
						</span>{' '}
						maison en temps réel avec confirmation mail
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Waves className='w-4 h-4 lg:w-6 lg:h-6' />
						<Smile className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li className='flex gap-8 justify'>
					<div>
						<span className='mr-2'>&bull;</span>
						<span className='font-bold underline-offset-2 underline'>
							Carrousel personnalisé
						</span>{' '}
						et animé composé d'images créées par l'IA (MidJourney)
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Sun className='w-4 h-4 lg:w-6 lg:h-6' />
					</div>
				</li>
				<li className='flex gap-8 justify'>
					<div>
						<span className='mr-2'>&bull;</span> Intégration d'{' '}
						<span className='font-bold underline-offset-2 underline'>
							OpenStreetMap
						</span>{' '}
						pour faciliter la localisation du restaurant
					</div>
					<div className='flex gap-2 text-yellow-500'>
						<Waves className='w-4 h-4 lg:w-6 lg:h-6' />
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
				<li></li>
			</ul>
		</div>
	);
};
