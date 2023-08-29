import Image from 'next/image';
import Link from 'next/link';

interface ProjectMockUpProps {
	website: string;
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
	website,
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
		<div className='mt-[8vh] relative h-[30vh] lg:h-[75vh] 3xl:h-[55vh]'>
			<Link href={website} target='_blank'>
				<Image
					src={macSrc}
					alt={macAlt}
					width={macWidth}
					height={macHeight}
					className={macClassName}
					priority
				/>
			</Link>
			<Link href={website} target='_blank'>
				<Image
					width={538}
					height={1146}
					src={iphoneSrc}
					alt={iphoneAlt}
					className={iphoneClassName}
					priority
				/>
			</Link>
		</div>
	);
};

export default ProjectMockUp;
