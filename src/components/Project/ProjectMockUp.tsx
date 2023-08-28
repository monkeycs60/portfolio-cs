import Image from 'next/image';

interface ProjectMockUpProps {
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
		<div className='flex mt-[8vh] relative h-[55vh]'>
			<Image
				src={macSrc}
				alt={macAlt}
				width={macWidth}
				height={macHeight}
				className={macClassName}
				priority
			/>
			<Image
				width={538}
				height={1146}
				src={iphoneSrc}
				alt={iphoneAlt}
				className={iphoneClassName}
				priority
			/>
		</div>
	);
};

export default ProjectMockUp;
