import { MousePointer, Hand } from 'lucide-react';
import Link from 'next/link';

const FlipCard = () => {
	return (
		<div className='relative'>
			<div className='hidden lg:block w-full h-[2px] bg-gray-cool-300 z-20 absolute bottom-1/2 '></div>
			<div className='w-full h-[100px]  lg:h-[200px] flex justify-end'>
				<div className='card-container relative h-[100px] lg:h-[200px] w-[380px] z-30 cursor-pointer lg:mr-44'>
					<div className='card lg:bg-[#B3CDE0] rounded-xl text-xl lg:text-3xl 3xl:text-4xl text-gray-cool-800  z-50 flex justify-center items-center'>
						<div className='card-front w-[200px] lg:w-[380px] px-12 py-4 flex bg-[#B3CDE0] rounded-xl '>
							<p className=''>Contactez-moi</p>
							<MousePointer className='hidden lg:block lg:w-10 lg:h-10 absolute bottom-4 right-1/3 icon-move-pentacle' />
							<Hand className='lg:hidden lg:w-10 lg:h-10 absolute bottom-2 animate-pulse right-1/3 ' />
						</div>
						<div className='hidden lg:flex card-back text-sm lg:text-xl  bg-[#B3CDE0] rounded-xl gap-3 flex-col'>
							<p className='lg:pt-6'>06 47 11 76 23</p>
							<Link
								href={'mailto:clement.serizay@gmail.com'}
								className='animate-border '>
								clement.serizay@gmail.com
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
