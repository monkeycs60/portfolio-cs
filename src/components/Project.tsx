import { Braces } from 'lucide-react';
import {
	chiaroscuroCategories,
	chiaroscuroTexts,
	coworkezCategories,
	coworkezTexts,
} from '@/data/projectDetails';
import ProjectDetails from './Project/ProjectDetails';
 

const Project = () => {
	return (
		<div className='max-w-[1200px] m-auto h-screen p-4 flex flex-col pt-[8vh] '>
			<div className='flex gap-6 text-6xl font-poppins mx-auto text-gray-cool-700 font-medium'>
				<Braces className=' text-yellow-500 lg:w-14 lg:h-14' />
				<h2>Sélections de projets</h2>
			</div>
			<ProjectDetails
				categories={coworkezCategories}
				texts={coworkezTexts}
			/>
			<ProjectDetails
				categories={chiaroscuroCategories}
				texts={chiaroscuroTexts}
			/>
		</div>
	);
};

export default Project;
