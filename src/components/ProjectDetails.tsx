'use client';

import { useState } from 'react';

const ProjectDetails = () => {
	const categories = [
		'Mon rôle',
		'Description du projet',
		'Technologies utilisées',
	];
	const [activeTab, setActiveTab] = useState(categories[0]);
	interface textsProps {
		[key: string]: string;
	}
	const texts: textsProps = {
		'Mon rôle': "Texte sur 'Mon rôle'.",
		'Description du projet': 'Description détaillée du projet.',
		'Technologies utilisées': 'Détails sur les technologies.',
	};

	// Pour déterminer la position de l'indicateur de sélection
	const selectedIndex = categories.indexOf(activeTab);
	const indicatorWidth = 100 / categories.length;

	return (
		<div className='flex flex-col mt-[15vh]  p-4 '>
			<div className='flex relative  justify-between'>
				{categories.map((category, index) => (
					<span
						key={index}
						onClick={() => setActiveTab(category)}
						className={`cursor-pointer flex-1 text-center`}>
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
			<div className='mt-20'>{texts[activeTab]}</div>
		</div>
	);
};

export default ProjectDetails;
