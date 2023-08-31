import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const HeroTop = () => {
	return (
		<div className='flex lg:w-[65vw] h-screen gap-16 lg:gap-0 flex-col lg:flex-row justify-between pt-[25vh] mx-auto relative'>
			<div className='h-full flex flex-col '>
				<div className='flex flex-col h-full  gap-14 font-eva text-secondary'>
					<div className='flex flex-col gap-4'>
						<h1 className='text-8xl'>
							Clément <span className='block uppercase'>Serizay</span>
						</h1>
						<h2 className='text-4xl font-poppins'>
							Développeur Fullstack Javascript
						</h2>
					</div>
					<div className='w-[80%] mt-[5vh] flex items-center font-poppins text-2xl '>
						<p className=''>
							Je cherchais un métier qui me permette de matérialiser mes
							idées en créant des projets. Je cherchais à avoir un impact
							sur le monde. Je suis devenu développeur.
						</p>
					</div>
					<div className='flex mt-[5vh] gap-12 font-poppins text-2xl'>
						<button className='px-8 py-4 bg-secondary text-tercary border-secondary border-[2px] hover:text-secondary hover:bg-primary'>
							Me contacter
						</button>
						<button className='px-8 py-4 border-[2px] border-secondary text-secondary hover:bg-secondary hover:text-tercary'>
							Linkedin
						</button>
					</div>
				</div>
			</div>
			<div className='h-1/2 relative justify-end items-start flex border-[2px] border-gray-300 rounded-full -translate-y-8 '>
				<Image
					src={'/cs-in-js-1.png'}
					alt='Logo'
					width={837}
					height={648}
					priority={true}
					className={clsx(
						' w-[250px] translate-y-16',
						'',
						'3xl:w-[800px] 3xl:-bottom-0 '
					)}
				/>
			</div>
		</div>
	);
};

export default HeroTop;
