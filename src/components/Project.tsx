import { Braces } from 'lucide-react';
import ProjectDetails from './Project/ProjectDetails';
import projectDetails from '../data/projectDetails.json';
import ProjectMockUp from './Project/ProjectMockUp';

const { chiaroscuro, coworkez } = projectDetails;

const Project = () => {
	return (
		<div className='max-w-[2200px] w-[2000px] m-auto p-4 flex flex-col pt-[8vh] bg-red-300 '>
			<div className='flex gap-6 text-6xl font-poppins mx-auto text-gray-cool-700 font-medium'>
				<Braces className=' text-yellow-500 lg:w-14 lg:h-14' />
				<h2>Sélections de projets</h2>
			</div>
			<ProjectMockUp
				macSrc='/desktop-coworkez.png'
				macAlt='my project Chiaroscuro mobile version'
				macWidth={1092}
				macHeight={664}
				macClassName='absolute bottom-0 left-[200px] cursor-pointer hover:backdrop-2 '
				iphoneSrc='/mobile-coworkez.png'
				iphoneAlt='my project Chiaroscuro mobile version'
				iphoneClassName='absolute scale-[55%] -bottom-[250px] left-[1300px]'
			/>
			<ProjectDetails
				categories={coworkez.categories}
				texts={coworkez.texts}
			/>
			<ProjectMockUp
				macSrc='/desktop-chiaroscuro.png'
				macAlt='my project Chiaroscuro mobile version'
				macWidth={1117}
				macHeight={664}
				macClassName='absolute bottom-0 left-[660px] cursor-pointer hover:backdrop-2 '
				iphoneSrc='/mobile-chiaroscuro.png'
				iphoneAlt='my project Chiaroscuro mobile version'
				iphoneClassName='absolute scale-[55%] -bottom-[250px] left-[100px]'
			/>
			<ProjectDetails
				categories={chiaroscuro.categories}
				texts={chiaroscuro.texts}
			/>
		</div>
	);
};

export default Project;
