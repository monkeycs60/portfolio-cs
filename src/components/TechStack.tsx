import Image from 'next/image';
import { MoveDown } from 'lucide-react';

const TechStack = () => {
	return (
		<div className='w-[65vw] mx-auto relative pt-[70px] flex flex-col bg-primary text-secondary overflow-hidden'>
			<div className='flex flex-col gap-10 justify-center items-center'>
				<div className='flex gap-4 font-poppins  w-full'>
					<h3 className='text-xl lg:text-3xl '>Tech Stack</h3>
					<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
				</div>
				<h3 className='font-poppins text-xl'>Fondamentaux</h3>
				<div className='flex gap-8'>
					<div className='w-[400px] h-[140px] bg-yellow-50 border-[2px] flex items-center justify-center'>
						<Image
							src={'/javascript.svg'}
							alt='Logo'
							width={60}
							height={60}
							className='w-[60px] h-[60px] '
						/>
					</div>
					<div className='w-[400px] h-[140px] bg-blue-100 border-[2px] flex items-center justify-center'>
						<Image
							src={'/typescript.svg'}
							alt='Logo'
							width={60}
							height={60}
							className='w-[60px] h-[60px] '
						/>
					</div>
				</div>
				<h3 className='font-poppins text-xl'>Front end</h3>
				<div className='flex gap-8'>
					<div className='w-[400px] h-[140px] bg-cyan-50 border-[2px] flex items-center justify-center'>
						<Image
							src={'/react-text-logo.png'}
							alt='Logo'
							width={1200}
							height={665}
							className='w-[130px]'
						/>
					</div>
					<div className='w-[400px] h-[140px] bg-violet-100 border-[2px] flex items-center justify-center'>
						<Image
							src={'/redux-text-logo.png'}
							alt='Logo'
							width={1200}
							height={600}
							className='w-[130px]'
						/>
					</div>
				</div>
				<h3 className='font-poppins text-xl'>Fullstack</h3>
				<div className='flex gap-8'>
					<div className='w-[400px] h-[140px] bg-green-100 border-[2px] flex items-center justify-center'>
						<Image
							src={'/node.svg'}
							alt='Logo'
							width={60}
							height={60}
							className='w-[90px] h-[90px] '
						/>
					</div>
					<div className='w-[400px] h-[140px] bg-gray-200 border-[1px]  flex items-center justify-center'>
						<Image
							src={'/next-text-logo.png'}
							alt='Logo'
							width={1200}
							height={719}
							className='w-[95px]'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
