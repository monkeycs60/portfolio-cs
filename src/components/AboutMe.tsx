import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
	return (
		<div className='w-full relative lg:h-[40vh] p-4 flex flex-col bg-secondary text-primary overflow-hidden'>
			<Image
				src='/sitted-laptop.png'
				alt='Logo'
				width={1020}
				height={400}
				priority={true}
				className={clsx(
					'absolute left-[400px] -bottom-4 lg:w-[220px] rounded-sm'
				)}
			/>
			<div className='w-[65vw] pt-12 flex-col gap-16 mx-auto'>
				<h2 className='font-poppins text-3xl uppercase first-letter:text-5xl'>
					A propos de moi
				</h2>
				<div className='mt-[70px] w-[90%] flex flex-col items-end gap-8 font-poppins '>
					<p className='text-xl w-1/2'>
						D'abord formé au développement front-end avec une
						spécialisation sur le framework React, j'ai continué mon
						apprentissage en autodidacte afin de pouvoir bâtir des
						applications fullstack.
					</p>
					<p className='text-xl w-1/2'>
						Depuis, j'ai créé de A à Z <span className='font-bold'> Coworkez Malin</span>, une application communautaire qui permet de référencer et de consulter tous les espaces de coworking gratuits en France
					</p>
					<p className='text-xl w-1/2'>
						Je suis actuellement à la recherche d'un poste de développeur front-end ou fullstack en CDI sur Paris et Bordeaux.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
