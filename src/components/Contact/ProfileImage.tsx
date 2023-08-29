import clsx from "clsx";
import Image from "next/image";

const ProfileImage = () => (
	<div className='lg:h-[150px] bg-white rounded-2xl overflow-hidden lg:overflow-auto'>
		<Image
			src='/photo-contact.png'
			alt='Logo'
			width={151}
			height={151}
			priority={true}
			className={clsx('lg:w-[150px] lg:h-[150px]')}
		/>
	</div>
);

export default ProfileImage;
