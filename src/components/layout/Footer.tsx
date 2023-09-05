import Image from 'next/image';

const Footer = () => {
	return (
		<div className='text-xs lg:text-sm 2xl:text-base w-screen bg-secondary text-primary px-4 py-10 lg:px-0 lg:py-6 2xl:py-8 flex flex-col items-center font-poppins '>
			<span className='flex flex-wrap justify-center lg:justify-normal lg:flex-nowrap items-center gap-4'>
				<p>Ce site a été développé en</p>
				<Image
					src={'/react.svg'}
					alt='Logo'
					width={60}
					height={60}
					className='w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'
				/>
				<p>sur le framework</p>
				<Image
					src={'/next-white.svg'}
					alt='Logo'
					width={100}
					height={100}
					className='w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]'
				/>
				<p>Powered by </p>
				<Image
					src={'/vercel.png'}
					alt='Logo'
					width={1539}
					height={387}
					className='w-[70px] h-[20px] lg:w-[100px] lg:h-[30px]'
				/>
			</span>
			<div className='flex  items-center'></div>
		</div>
	);
};

export default Footer;
