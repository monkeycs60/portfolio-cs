import Image from 'next/image';

interface ProjectMockUpProps {
	containerClassName: string;
	macSrc: string;
	macAlt: string;
	macWidth: number;
	macHeight: number;
	macClassName: string;
	iphoneSrc: string;
	iphoneAlt: string;
	iphoneClassName: string;
}

const ProjectMockUp = ({
	containerClassName,
	macSrc,
	macAlt,
	macWidth,
	macHeight,
	macClassName,
	iphoneSrc,
	iphoneAlt,
	
	iphoneClassName,
}: ProjectMockUpProps) => {
	return (
		// <div className='flex mt-[15vh] relative h-[55vh]  justify-center'>
		<div className={containerClassName}>
			<Image
				src={macSrc}
				alt={macAlt}
				// width={1092}
				// height={684}
				width={macWidth}
				height={macHeight}
				// className='absolute bottom-0 -left-60'
				className={macClassName}
				priority
			/>
			<Image
				// src='/mobile-coworkez.png'
				// alt='my project Chiaroscuro mobile version'
				width={538}
				height={1146}
				// className='absolute scale-75 -bottom-52 -right-60'
				src={iphoneSrc}
				alt={iphoneAlt}

				className={iphoneClassName}
				priority
			/>
		</div>
	);
};

export default ProjectMockUp;
