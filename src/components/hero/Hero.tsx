import Image from 'next/image';
import { GitMerge } from 'lucide-react';

const Hero = () => {
	return (
		<div className='w-full h-screen p-4 flex flex-col mt-[16vh] '>
			<div className='flex w-[80vw] h-[35vh] justify-between items-center mx-auto relative'>
				<div className='h-1/2 flex flex-col justify-center items-center w-1/2'>
					<div className='text-6xl font-bold font-poppins text-gray-cool-700 flex flex-col gap-4'>
						<div className='flex gap-4'>
							<GitMerge className=' text-yellow-400 lg:w-14 lg:h-14' />
							<div className='flex flex-col gap-2'>
								<h1>Clément Serizay,</h1>
								<h2>Développeur Fullstack</h2>
							</div>
						</div>
					</div>
				</div>
				<div className='h-1/2 w-1/2  items-end'>
					<Image
						src={'/profil-stack.png'}
						alt='Logo'
						width={531}
						height={423}
						priority={true}
						className='absolute -bottom-0 right-0'
					/>
				</div>
			</div>
			<div className='max-w-[1200px] text-3xl flex flex-col  mx-auto mt-[6vh] font-circularLight font-light gap-[12vh] '>
				<p>
					Après une reconversion professionnelle, je me suis lancé dans le
					développement web. Spécialisé dans le framework React, je me
					tiens toujours informé des dernières nouveautés en les intégrant à mes projets.
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
						/>
						<Image
							src={'/typescript.svg'}
							alt='Logo'
							width={60}
							height={60}
						/>
						<Image src={'/react.svg'} alt='Logo' width={60} height={60} />
						<Image src={'/redux.svg'} alt='Logo' width={60} height={60} />
						<Image
							src={'/nexticon.svg'}
							alt='Logo'
							width={60}
							height={60}
						/>
						<Image src={'/node.svg'} alt='Logo' width={60} height={60} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
