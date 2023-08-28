import { Braces } from 'lucide-react';
import ProjectDetails from './Project/ProjectDetails';
import projectDetails from '../data/projectDetails.json';
import ProjectMockUp from './Project/ProjectMockUp';

const { chiaroscuro, coworkez } = projectDetails;

const Project = () => {
	return (
		<div className='max-w-[2200px] w-[2000px] m-auto p-4 flex flex-col pt-[8vh]'>
			<div className='flex gap-6 text-6xl font-poppins mx-auto text-gray-cool-700 font-medium'>
				<Braces className=' text-yellow-500 lg:w-14 lg:h-14' />
				<h2>Sélections de projets</h2>
			</div>
			<div className='flex flex-col gap-4'>
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
				<h1 className='text-center font-poppins text-5xl mt-32 text-gray-cool-700'>
					Coworkez Malin
				</h1>
				<ProjectDetails
					categories={coworkez.categories}
					texts={{
						role: 'Texte sur mon rôle',
						description: 'Description détaillée du projet.',
					}}
					TechComponent={
						<Braces className=' text-yellow-500 lg:w-14 lg:h-14' />
					}
				/>
			</div>
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
				texts={{
					role: (
						<>
							Bonjour, <strong>hello les gens</strong>!<br />
							Comment ça va ?
						</>
					),
					description: 'Description détaillée du projet.',
				}}
				TechComponent={
					<Braces className=' text-yellow-500 lg:w-14 lg:h-14' />
				}
			/>
		</div>
	);
};

export default Project;
