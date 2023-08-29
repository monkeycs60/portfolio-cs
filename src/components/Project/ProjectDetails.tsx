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

const ProjectDetails = ({
	categories,
	texts,
}: ProjectDetailsProps) => {
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
		<div className='flex flex-col max-w-[1200px] h-[400px] lg:h-[600px] mx-auto mt-[5vh] mb-[5vh] w-full font-circularLight p-4 '>
			<div className='flex relative justify-between'>
				{categories.map((category, index) => (
					<span
						key={index}
						onClick={() => setActiveTab(category)}
						className={`cursor-pointer w-[400px] flex-1 text-center text-sm lg:text-xl `}>
						{category}
					</span>
				))}

				{/* Barre continue */}
				<div className='absolute w-full h-[8px] bg-gray-cool-300 -bottom-6 rounded-xl'></div>

				{/* Indicateur de sélection */}
				<div
					className='absolute h-[8px] rounded-xl bg-black -bottom-6 transition-all z-50 duration-300'
					style={{
						width: `${indicatorWidth}%`,
						transform: `translateX(${
							selectedIndex * (indicatorWidth + 67)
						}%)`,
					}}></div>
			</div>
			<div className='mt-20 lg:text-lg'>{detailsTab[selectedIndex]}</div>
		</div>
	);
};

export default ProjectDetails;
