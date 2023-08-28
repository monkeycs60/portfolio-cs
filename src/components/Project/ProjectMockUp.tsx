import Image from 'next/image';

const ProjectMockUp = () => {
	return (
		<div className='flex mt-[5vh] relative h-[55vh]  justify-center'>
			<Image
				src='/desktop-coworkez.png'
				alt='my project Chiaroscuro desktop version'
				width={1092}
				height={684}
                className='absolute bottom-0 -left-60'
			/>
			<Image
				src='/mobile-coworkez.png'
				alt='my project Chiaroscuro mobile version'
				width={538}
				height={1146}
				className='absolute scale-75 -bottom-52 -right-60'
			/>
		</div>
	);
};

export default ProjectMockUp;
