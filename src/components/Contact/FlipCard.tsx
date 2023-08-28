import { MousePointer } from 'lucide-react';
import Link from 'next/link';

const FlipCard = () => {
	return (
		<div className='relative'>
			<div className='w-full h-[2px] bg-gray-cool-300 z-20 absolute bottom-1/2 '></div>
			<div className='w-full h-[200px] flex justify-end'>
				<div className='card-container relative h-[200px] w-[380px] z-30 cursor-pointer mr-44'>
					<div className='card bg-[#B3CDE0] rounded-xl text-3xl 3xl:text-4xl text-gray-cool-800  z-50 flex justify-center items-center'>
						<div className='card-front  '>
							<p className=''>Contactez-moi</p>
							<MousePointer className='lg:w-10 lg:h-10 absolute bottom-4 right-1/3 icon-move-pentacle' />
						</div>
						<div className='card-back text-xl  rounded-xl gap-3 flex flex-col'>
							<p className='pt-6'>06 47 11 76 23</p>
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
