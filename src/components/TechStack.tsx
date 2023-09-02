import Image from 'next/image';
import { MoveDown } from 'lucide-react';

const TechStack = () => {
	return (
		<div className='w-[65vw] mx-auto relative pt-[70px] flex flex-col bg-primary text-secondary overflow-hidden'>
			<div className='flex flex-col gap-10 justify-center items-center text-2xl'>
				<div className='flex gap-4 font-poppins  w-full'>
					<h3 className='text-xl lg:text-3xl '>Tech Stack</h3>
					<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
				</div>
				<div className='flex gap-[200px] justify-between mt-[100px] items-center w-[75%]'>
					<div className='w-[1000px] h-[100px] justify-center gap-12 flex items-center'>
						<Image
							src={'/javascript.svg'}
							alt='Logo'
							width={60}
							height={60}
							className='w-[72px] h-[72px] '
						/>
						<Image
							src={'/typescript.svg'}
							alt='Logo'
							width={60}
							height={60}
							className='w-[72px] h-[72px] '
						/>
					</div>
					<div className='w-1/2'>
						<span>Fondamentaux</span>
					</div>
				</div>
				<div className='flex gap-[200px] justify-between items-center w-[75%] '>
					<div className='w-[1000px] h-[100px] justify-center gap-8 flex items-center'>
						<Image
							src={'/react-text-logo.png'}
							alt='Logo'
							width={1200}
							height={665}
							className='w-[140px]'
						/>
						<Image
							src={'/redux-text-logo.png'}
							alt='Logo'
							width={1200}
							height={600}
							className='w-[140px]'
						/>
					</div>
					<div className='w-1/2'>
						<span>Front end</span>
					</div>
				</div>
				<div className='flex gap-[200px] justify-between items-center w-[75%] mb-[100px] '>
					<div className='w-[1000px] h-[100px] justify-center flex gap-10 items-center'>
						<Image
							src={'/node.svg'}
							alt='Logo'
							width={60}
							height={60}
							className='w-[100px] h-[100px] '
						/>
						<Image
							src={'/next-text-logo.png'}
							alt='Logo'
							width={1200}
							height={719}
							className='w-[120px] h-[70px] '
						/>
					</div>
					<div className='w-1/2'>
						<span>Fullstack</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
