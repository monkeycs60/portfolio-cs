import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {
	HardDriveDownload,
	Github,
	Linkedin,
	MousePointer,
} from 'lucide-react';

const Contact = () => {
	return (
		<div className='w-screen bg-gray-cool-700 font-poppins'>
			<div className='w-[80%]  m-auto py-[15vh] p-4 flex flex-col gap-32'>
				<div className='flex flex-col gap-2'>
					<div className='flex lg:h-[150px] items-center gap-12'>
						<div className='lg:h-[150px] bg-white rounded-2xl'>
							<Image
								src='/photo-contact.png'
								alt='Logo'
								width={151}
								height={151}
								priority={true}
								className={clsx('lg:w-[150px] lg:h-[150px]')}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<p className='text-7xl text-white font-light'>
								Construisons ensemble
							</p>
							<p className='text-7xl text-white  font-light'>
								Votre projet
							</p>
						</div>
					</div>
					<div></div>
				</div>
				<div className='relative'>
					<div className='w-full h-[2px] bg-gray-cool-300'></div>
					<div className='card-container relative h-0 cursor-pointer'>
						<div className='card bg-[#B3CDE0] rounded-xl text-4xl text-gray-cool-800  lg:h-[200px] lg:w-[380px] absolute left-[55vw] bottom-[100px] flex justify-center items-center'>
							<div className='card-front  '>
								<p className=''>Contactez-moi</p>
								<MousePointer className='lg:w-10 lg:h-10 absolute bottom-4 right-1/3 icon-move-pentacle' />
							</div>
							<div className='card-back text-2xl bg-white rounded-xl flex flex-col'>
								<p className='p-8'>06 47 11 76 23</p>
								<p className='p-8'>clement@serizay.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className='space-y-8'>
					<div className='flex gap-8 font-light text-4xl text-white'>
						<Link
							href='https://www.linkedin.com/in/cl%C3%A9ment-serizay-044911262/'
							target='_blank'
							className='flex items-center gap-3'>
							<Linkedin className={clsx('lg:w-[32px] lg:h-[32px]')} />
							<span>LinkedIn</span>
						</Link>
						<Link
							href='/docs/CV_Clement_SERIZAY_summer-2023_v4.pdf'
							target='_blank'
							className='flex items-center gap-3'>
							<HardDriveDownload
								className={clsx('lg:w-[32px] lg:h-[32px]')}
							/>
							<span>CV</span>
						</Link>
					</div>
					<div className=' font-light text-4xl text-white'>
						<Link
							href='https://github.com/monkeycs60'
							className='flex items-center gap-3'>
							<Github className={clsx('lg:w-[32px] lg:h-[32px]')} />
							<span>GitHub</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
