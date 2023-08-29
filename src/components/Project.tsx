import { Braces } from 'lucide-react';
import ProjectDetails from './Project/ProjectDetails';
import projectDetails from '../data/projectDetails.json';
import ProjectMockUp from './Project/ProjectMockUp';
import {
	CoworkezFeatures,
	CoworkezDescription,
	CoworkezTechnologies,
} from './Project/coworking/Coworkez';
import {
	ChiaroscuroFeatures,
	ChiaroscuroDescription,
	ChiaroscuroTechnologies,
} from './Project/chiaroscuro/Chiaroscuro';
import Link from 'next/link';

const { chiaroscuro, coworkez } = projectDetails;

const Project = () => {
	return (
		<div className='lg:max-w-[2200px] w-screen lg:w-[2000px] m-auto p-4 flex flex-col pt-[8vh]'>
			<div className='flex gap-6 text-2xl lg:text-6xl font-poppins mx-auto text-gray-cool-700 font-medium'>
				<Braces className=' text-yellow-500 lg:w-14 lg:h-14' />
				<h2>Sélections de projets</h2>
			</div>
			<div className='flex flex-col gap-4'>
				<ProjectMockUp
					website='https://coworkezmalin.com'
					macSrc='/desktop-coworkez.png'
					macAlt='my project Chiaroscuro mobile version'
					macWidth={1092}
					macHeight={664}
					macClassName='absolute bottom-0 -left-[50px] lg:left-[230px] 3xl:left-[200px] cursor-pointer hover:brightness-50 scale-[60%] lg:scale-[82%] 3xl:scale-100'
					iphoneSrc='/mobile-coworkez.png'
					iphoneAlt='my project Chiaroscuro mobile version'
					iphoneClassName='absolute scale-[20%] lg:scale-[45%] 3xl:scale-[55%] -bottom-[270px] lg:-bottom-[250px] left-[120px] lg:left-[1180px] 3xl:left-[1300px] cursor-pointer hover:brightness-50'
				/>
				<div className='flex flex-col justify-center items-center gap-4 font-poppins'>
					<h1 className='text-center text-3xl lg:text-4xl 3xl:text-5xl 3xl:mt-32 text-gray-cool-700'>
						Coworkez Malin
					</h1>
					<Link href={'https://www.coworkezmalin.com'} target='_blank'>
						<span className='text-sm lg:text-base 3xl:text-lg hover:underline text-gray-cool-800'>
							coworkezmalin.com
						</span>
					</Link>
				</div>
				<ProjectDetails
					categories={coworkez.categories}
					texts={{
						role: <CoworkezFeatures />,
						description: <CoworkezDescription />,
						technologies: <CoworkezTechnologies />,
					}}
				/>
			</div>
			<div className='flex flex-col gap-4 mb-[10vh]'>
				<ProjectMockUp
					website='https://restaurant-app-67d7.vercel.app/'
					macSrc='/desktop-chiaroscuro.png'
					macAlt='my project Chiaroscuro mobile version'
					macWidth={1117}
					macHeight={664}
					macClassName='absolute bottom-0 -left-[50px] lg:left-[580px] 3xl:left-[660px] cursor-pointer hover:brightness-150 scale-[60%] lg:scale-[82%] 3xl:scale-100'
					iphoneSrc='/mobile-chiaroscuro.png'
					iphoneAlt='my project Chiaroscuro mobile version'
					iphoneClassName='absolute scale-[20%] lg:scale-[45%] 3xl:scale-[55%] -bottom-[270px] lg:-bottom-[250px] left-[120px] lg:left-[200px] 3xl:left-[100px] hover:brightness-125 cursor-pointer'
				/>
				<div className='flex flex-col justify-center items-center gap-4 font-poppins'>
					<h1 className='text-center text-3xl lg:text-4xl 3xl:text-5xl 3xl:mt-32 text-gray-cool-700'>
						Chiaroscuro
					</h1>
					<Link
						href={'https://restaurant-app-67d7.vercel.app/'}
						target='_blank'>
						<span className='text-sm lg:text-base 3xl:text-lg hover:underline text-gray-cool-800'>
							restaurant-app-67d7.vercel.app
						</span>
					</Link>
				</div>
				<ProjectDetails
					categories={chiaroscuro.categories}
					texts={{
						role: <CoworkezFeatures />,
						description: <ChiaroscuroDescription />,
						technologies: <ChiaroscuroTechnologies />,
					}}
				/>
			</div>
		</div>
	);
};

export default Project;
