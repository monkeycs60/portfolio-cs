import { Braces } from 'lucide-react';
import MacbookMockup from '../MacBookMockUp';

const Project = () => {
	return (
		<div className='max-w-[1200px] m-auto h-screen p-4 flex flex-col pt-[8vh] '>
			<div className='flex gap-6 text-6xl font-poppins text-gray-cool-700 font-medium'>
				<Braces className=' text-yellow-500 lg:w-14 lg:h-14' />
				<h2>Sélections de projets</h2>
			</div>
			<MacbookMockup>
				<iframe
					src='https://coworkezmalin.com/'
					className='w-full h-full'></iframe>
			</MacbookMockup>
		</div>
	);
};

export default Project;
