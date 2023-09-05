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
		<>
			<div
				id='projects'
				className='w-[90%] lg:w-[65%] m-auto flex flex-col pt-[13vh]'>
				<div className='flex gap-4 font-poppins  w-full'>
					<h3 className='text-xl lg:text-2xl 2xl:text-3xl'>
						Mes réalisations
					</h3>
					<div className='bg-gray-cool-700 w-[5px] animate-pulse '></div>
				</div>
				<div className='pt-12'>
					<span className='font-poppins text-sm lg:text-base 2xl:text-xl'>
						Ces projets ne sont pas des clones. Ils ont une âme.
					</span>
				</div>
				<div className='flex flex-col gap-4'>
					<ProjectMockUp
						website='https://coworkezmalin.com'
						macSrc='/desktop-coworkez.png'
						macAlt='coworkezmalin.com desktop version'
						macWidth={1092}
						macHeight={664}
						macClassName='hidden lg:block absolute lg:-bottom-[70px] 2xl:bottom-0 -left-[80px] 2xl:left-[0px] 3xl:left-[200px] cursor-pointer hover:brightness-50 scale-[60%] 2xl:scale-[78%] 3xl:scale-100'
						iphoneSrc='/mobile-coworkez.png'
						iphoneAlt='mon projet coworkez malin mobile version'
						iphoneClassName='absolute scale-[23%] lg:scale-[20%] 2xl:scale-[32%] 3xl:scale-[40%] -bottom-[260px] lg:-bottom-[410px] 2xl:-bottom-[310px] 3xl:-bottom-[340px] lg:left-[520px] 2xl:left-[900px] 3xl:left-[1300px] cursor-pointer hover:brightness-50'
					/>
					<div className='flex flex-col justify-center items-center gap-4 font-poppins'>
						<h1 className='text-center text-3xl 2xl:text-4xl 3xl:text-5xl 3xl:mt-32 text-gray-cool-700'>
							Coworkez Malin
						</h1>
						<Link href={'https://www.coworkezmalin.com'} target='_blank'>
							<span className='text-sm lg:text-base 3xl:text-lg hover:underline text-gray-cool-800'>
								coworkezmalin.com
							</span>
						</Link>
					</div>
				</div>
			</div>
			<ProjectDetails
				categories={coworkez.categories}
				texts={{
					role: <CoworkezFeatures />,
					description: <CoworkezDescription />,
					technologies: <CoworkezTechnologies />,
				}}
			/>
			<div className=' w-[65%] m-auto p-4 flex flex-col '>
				<div className='flex flex-col gap-4 4xl:mb-[10vh]'>
					<ProjectMockUp
						website='https://restaurant-app-67d7.vercel.app/'
						macSrc='/desktop-chiaroscuro.png'
						macAlt='Chiaroscuro desktop version'
						macWidth={1117}
						macHeight={664}
						macClassName='hidden lg:block absolute lg:-bottom-[70px] 2xl:bottom-0 left-[130px] 2xl:left-[280px] 3xl:left-[580px] cursor-pointer hover:brightness-150 scale-[60%] 2xl:scale-[78%] 3xl:scale-100'
						iphoneSrc='/mobile-chiaroscuro.png'
						iphoneAlt='mon projet Chiaroscuro mobile version'
						iphoneClassName='absolute scale-[36%] lg:scale-[20%] 2xl:scale-[32%] 3xl:scale-[40%] -bottom-[120px] lg:-bottom-[420px] 2xl:-bottom-[310px] 3xl:-bottom-[340px] lg:-left-[120px] 2xl:-left-[70px] 3xl:left-[60px] hover:brightness-125 cursor-pointer'
					/>
					<div className='flex flex-col justify-center items-center gap-4 font-poppins'>
						<h1 className='text-center text-3xl 2xl:text-4xl 3xl:text-5xl 3xl:mt-32 text-gray-cool-700'>
							Chiaroscuro
						</h1>
						<Link
							href={'https://restaurant-app-67d7.vercel.app/'}
							target='_blank'>
							<span className='text-xs lg:text-base 3xl:text-lg hover:underline text-gray-cool-800'>
								restaurant-app-67d7.vercel.app
							</span>
						</Link>
					</div>
				</div>
			</div>
			<ProjectDetails
				categories={chiaroscuro.categories}
				texts={{
					role: <ChiaroscuroFeatures />,
					description: <ChiaroscuroDescription />,
					technologies: <ChiaroscuroTechnologies />,
				}}
			/>
		</>
	);
};

export default Project;
