import { clsx } from 'clsx';

import { HardDriveDownload, Github, Linkedin } from 'lucide-react';
import ProfileImage from './Contact/ProfileImage';
import ProfileText from './Contact/ProfileText';
import SocialLink from './Contact/SocialLink';
import FlipCard from './Contact/FlipCard';

const Contact = () => {
	return (
		<div className='w-screen bg-gray-cool-700 font-poppins'>
			<div className='w-[80%] m-auto py-[6vh] lg:py-[10vh] p-4 flex flex-col gap-14 lg:gap-2 3xl:gap-16'>
				<div className='flex flex-col gap-2'>
					<div className='flex lg:h-[150px] items-center gap-12'>
						<ProfileImage />
						<ProfileText />
					</div>
					<div></div>
				</div>
				<FlipCard />
				<div className='space-y-8'>
					<div className='flex gap-8 font-light text-xl lg:text-3xl 3xl:text-4xl text-white'>
						<SocialLink
							href='https://www.linkedin.com/in/cl%C3%A9ment-serizay-044911262/'
							icon={
								<Linkedin
									className={clsx(
										'lg:w-[32px] lg:h-[32px] group-hover:animate-ping'
									)}
								/>
							}>
							LinkedIn
						</SocialLink>
						<SocialLink
							href='/docs/CV_Clement_SERIZAY_summer-2023_v4.pdf'
							icon={
								<HardDriveDownload
									className={clsx(
										'lg:w-[32px] lg:h-[32px] group-hover:animate-ping'
									)}
								/>
							}>
							CV
						</SocialLink>
					</div>
					<div className='font-light text-xl lg:text-3xl 3xl:text-4xl text-white'>
						<SocialLink
							href='https://github.com/monkeycs60'
							icon={
								<Github
									className={clsx(
										'lg:w-[32px] lg:h-[32px] group-hover:animate-ping'
									)}
								/>
							}>
							GitHub
						</SocialLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
