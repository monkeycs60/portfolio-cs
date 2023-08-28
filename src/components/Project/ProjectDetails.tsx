'use client';

import { useState } from 'react';

interface textsProps {
	[key: string]: string;
}

interface ProjectDetailsProps {
	categories: string[];
	texts: textsProps;
}

const ProjectDetails = ({ categories, texts }: ProjectDetailsProps) => {
	const [activeTab, setActiveTab] = useState(categories[1]);

	// Pour déterminer la position de l'indicateur de sélection
	const selectedIndex = categories.indexOf(activeTab);
	const indicatorWidth = 100 / categories.length;

	return (
		<div className='flex flex-col mt-[10vh] mb-[5vh] w-full font-circularLight p-4 '>
			<div className='flex relative justify-between'>
				{categories.map((category, index) => (
					<span
						key={index}
						onClick={() => setActiveTab(category)}
						className={`cursor-pointer w-[400px] flex-1 text-center text-xl `}>
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
			<div className='mt-20 text-lg'>{texts[activeTab]}</div>
		</div>
	);
};

export default ProjectDetails;