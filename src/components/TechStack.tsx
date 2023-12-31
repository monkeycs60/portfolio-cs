import Image from 'next/image';

const TechStack = () => {
	return (
		<div
			id='stack'
			className='w-[90%] lg:w-[65vw] mx-auto relative pt-[70px] flex flex-col bg-primary text-secondary overflow-hidden'>
			<div className='flex flex-col gap-10 justify-center items-center text-2xl'>
				<div className='flex gap-4 font-poppins  w-full'>
					<h3 className='text-xl lg:text-2xl 2xl:text-3xl'>Tech Stack</h3>
					<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
				</div>
				<div className='flex lg:mt-[40px] gap-8 lg:gap-16 2xl:gap-0 flex-wrap 2xl:flex-nowrap 2xl:mt-[50px] 3xl:mt-[100px] 2xl:h-[350px] w-[80%] 2xl:w-full 3xl:w-[90%] bg-gray-100 items-center justify-center lg:justify-between text-base 2xl:text-lg font-poppins py-12  lg:p-20'>
					<div className='flex flex-col-reverse justify-between gap-6 lg:gap-12 lg:w-[33%] 2xl:w-auto'>
						<div className='flex gap-10 justify-center 2xl:justify-normal'>
							<Image
								src={'/javascript.svg'}
								alt='Logo'
								width={60}
								height={60}
								className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] 3xl:w-[65px] 3xl:h-[65px] rounded-xl'
							/>
							<Image
								src={'/typescript.svg'}
								alt='Logo'
								width={60}
								height={60}
								className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] 3xl:w-[65px] 3xl:h-[65px]'
							/>
						</div>
						<div className='text-center lg:mt-8 font-semibold'>
							<span>Fondamentaux</span>
						</div>
					</div>
					<div className='flex flex-col-reverse gap-6 lg:gap-10 lg:w-[33%] 2xl:w-auto'>
						<div className='flex gap-10 justify-center 2xl:justify-normal'>
							<Image
								src={'/react-text-logo.png'}
								alt='Logo'
								width={1200}
								height={665}
								className='w-[90px] xl:w-[100px] 2xl:w-[120px] 3xl:w-[140px]'
							/>
							<Image
								src={'/redux-text-logo.png'}
								alt='Logo'
								width={1200}
								height={600}
								className='w-[90px] xl:w-[100px] 2xl:w-[130px] 3xl:w-[140px]'
							/>
						</div>
						<div className='text-center mt-8 font-semibold'>
							<span>Front-end</span>
						</div>
					</div>
					<div className='flex flex-col-reverse gap-6 lg:gap-10 lg:w-[33%] 2xl:w-auto'>
						<div className='flex gap-10 justify-center 2xl:justify-normal'>
							<Image
								src={'/node.svg'}
								alt='Logo'
								width={60}
								height={60}
								className='w-[50px] h-[50px] xl:w-[65px] xl:h-[65px] 2xl:w-[70px] 2xl:h-[70px] 3xl:w-[80px] 3xl:h-[80px] '
							/>
							<Image
								src={'/next-text-logo.png'}
								alt='Logo'
								width={1200}
								height={719}
								className='w-[80px] h-[48px]
								xl:w-[80px] xl:h-[48px] 2xl:w-[85px] 2xl:h-[52px]
								3xl:w-[90px] 3xl:h-[55px] lg:translate-y-2'
							/>
						</div>
						<div className='text-center mt-8 font-semibold'>
							<span>Fullstack</span>
						</div>
					</div>
					<div className='flex flex-col-reverse gap-6 lg:gap-12 lg:w-[33%] 2xl:w-auto'>
						<div className='flex gap-10 justify-center 2xl:justify-normal'>
							<Image
								src={'/photoshop-logo.png'}
								alt='Logo'
								width={2101}
								height={2048}
								className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] 3xl:w-[65px] 3xl:h-[65px]'
							/>
							<Image
								src={'/figma-logo.png'}
								alt='Logo'
								width={2048}
								height={2048}
								className='w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] 3xl:w-[65px] 3xl:h-[65px] rounded-2xl'
							/>
						</div>
						<div className='text-center mt-8 font-semibold'>
							<span>Design</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechStack;
