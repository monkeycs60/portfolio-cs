const MacbookMockup = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='relative w-[1000px] h-[600px]'>
			<img
				src='/macos-transp.png'
				alt='MacBook Mockup'
				className='w-full h-full'
			/>
			<div className='absolute top-[5%] left-[13%] w-[75%] h-[80%] overflow-hidden rounded-lg'>
				{children}
			</div>
		</div>
	);
};

export default MacbookMockup;
