import Image from 'next/image';

const Footer = () => {
	return (
		<div className='w-screen bg-secondary text-primary py-8 flex flex-col items-center font-poppins '>
			<span className='flex items-center gap-4'>
				<p>Ce site a été développé en</p>
				<Image
					src={'/react.svg'}
					alt='Logo'
					width={60}
					height={60}
					className='w-[35px] h-[35px]'
				/>
				<p>sur le framework</p>
				<Image
					src={'/next-white.svg'}
					alt='Logo'
					width={100}
					height={100}
					className='w-[70px] h-[70px]'
				/>
				<p>Powered by </p>
				<Image
					src={'/vercel.png'}
					alt='Logo'
					width={1539}
					height={387}
					className='w-[100px] h-[30px]'
				/>
			</span>
			<div className='flex  items-center'></div>
		</div>
	);
};

export default Footer;
