import Image from 'next/image';

const TechStack = () => {
	return (
		<div className='w-[65vw] mx-auto relative pt-[70px] flex flex-col bg-primary text-secondary overflow-hidden'>
			<div className='flex flex-col gap-10 justify-center items-center text-2xl'>
				<div className='flex gap-4 font-poppins  w-full'>
					<h3 className='text-xl lg:text-3xl '>Tech Stack</h3>
					<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
				</div>
				<div className='flex mt-[100px] h-[350px] w-[82%] bg-gray-100 items-center justify-between text-lg font-poppins p-20'>
					<div className='flex-col'>
						<div className='flex gap-10'>
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
						<div className='text-center mt-8'>
							<span>Fondamentaux</span>
						</div>
					</div>
					<div className='flex-col'>
						<div className='flex gap-10'>
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
								className='w-[150px]'
							/>
						</div>
						<div className='text-center mt-8'>
							<span>Front-end</span>
						</div>
					</div>
					<div className='flex-col'>
						<div className='flex gap-10'>
							<Image
								src={'/node.svg'}
								alt='Logo'
								width={60}
								height={60}
								className='w-[80px] h-[80px] '
							/>
							<Image
								src={'/next-text-logo.png'}
								alt='Logo'
								width={1200}
								height={719}
								className='w-[90px] h-[55px] translate-y-2'
							/>
						</div>
						<div className='text-center mt-8'>
							<span>Fullstack</span>
						</div>
					</div>
					<div className='flex-col'>
						<div className='flex gap-10'>
							<Image
								src={'/photoshop-logo.png'}
								alt='Logo'
								width={2101}
								height={2048}
								className='w-[72px] h-[72px]'
							/>
							<Image
								src={'/figma-logo.png'}
								alt='Logo'
								width={2048}
								height={2048}
								className='w-[72px] h-[72px] rounded-2xl'
							/>
						</div>
						<div className='text-center mt-8'>
							<span>Design</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
