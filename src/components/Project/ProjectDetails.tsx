'use client';

import { useState } from 'react';
import { MyRole, ProjectDescription, Technologies } from './ProjectCategories';

interface ProjectDetailsProps {
	categories: string[];
	texts: {
		role: React.ReactNode | string;
		description: React.ReactNode | string;
		technologies: React.ReactNode | string;
	};
}

const ProjectDetails = ({ categories, texts }: ProjectDetailsProps) => {
	const [activeTab, setActiveTab] = useState(categories[1]);

	const detailsTab = [
		<MyRole content={texts.role} />,
		<ProjectDescription content={texts.description} />,
		<Technologies content={texts.technologies} />,
	];

	// Pour déterminer la position de l'indicateur de sélection
	const selectedIndex = categories.indexOf(activeTab);
	const indicatorWidth = 100 / categories.length;

	return (
		<div className='flex flex-col h-[400px] lg:h-[1000px] my-[5vh] w-screen font-circularLight  bg-secondary text-primary'>
			<div className='flex relative justify-between w-[65%] mx-auto mt-20'>
				{categories.map((category, index) => (
					<span
						key={index}
						onClick={() => setActiveTab(category)}
						className={`cursor-pointer w-[400px] flex-1 text-center text-sm lg:text-xl `}>
						{category}
					</span>
				))}

				{/* Barre continue */}
				<div className='absolute w-full h-[8px] bg-gray-400 -bottom-6 rounded-xl'></div>

				{/* Indicateur de sélection */}
				<div
					className='absolute h-[8px] rounded-xl bg-yellow-500 -bottom-6 transition-all z-50 duration-300'
					style={{
						width: `${indicatorWidth}%`,
						transform: `translateX(${
							selectedIndex * (indicatorWidth + 67)
						}%)`,
					}}></div>
			</div>
			<div className='w-[35%] h-full flex flex-col  justify-center mx-auto mt-16 py-16 lg:text-lg'>
				{detailsTab[selectedIndex]}
			</div>
		</div>
	);
};

export default ProjectDetails;
