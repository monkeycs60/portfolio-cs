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
