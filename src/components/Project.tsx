import { Braces } from 'lucide-react';
import ProjectDetails from './Project/ProjectDetails';
import projectDetails from '../data/projectDetails.json';
import ProjectMockUp from './Project/ProjectMockUp';

const { chiaroscuro, coworkez } = projectDetails;

const Project = () => {
	return (
		<div className='max-w-[1200px] m-auto p-4 flex flex-col pt-[8vh] '>
			<div className='flex gap-6 text-6xl font-poppins mx-auto text-gray-cool-700 font-medium'>
				<Braces className=' text-yellow-500 lg:w-14 lg:h-14' />
				<h2>Sélections de projets</h2>
			</div>
			<ProjectMockUp />
			<ProjectDetails
				categories={coworkez.categories}
				texts={coworkez.texts}
			/>
			<ProjectDetails
				categories={chiaroscuro.categories}
				texts={chiaroscuro.texts}
			/>
		</div>
	);
};

export default Project;
