const AboutMe = () => {
	return (
		<div
			id='about'
			className='w-full relative pt-[30px] pb-[80px] 3xl:pt-[30px] 3xl:pb-[80px] p-4 flex flex-col bg-secondary text-primary overflow-hidden'>
			<div className='w-[65vw] pt-12 flex-col gap-4 3xl:gap-16 mx-auto'>
				<div className='flex gap-4'>
					<h2 className='font-poppins text-3xl'>A propos de moi</h2>{' '}
					<div className='bg-gray-cool-100 w-[5px] animate-pulse '></div>
				</div>
				<div className='mt-[90px] w-[90%] flex flex-col gap-8 font-poppins '>
					<p className='text-xl w-3/4 3xl:w-[60%] '>
						D'abord formé au développement front-end avec une
						spécialisation sur le framework React, j'ai continué mon
						apprentissage en autodidacte afin de pouvoir bâtir des
						applications fullstack.
					</p>
					<p className='text-xl w-3/4 3xl:w-[60%] '>
						Depuis, j'ai créé de A à Z{' '}
						<span className='font-bold'> Coworkez Malin</span>, une
						application communautaire qui permet de référencer et de
						consulter tous les espaces de coworking gratuits en France
					</p>
					<p className='text-xl w-3/4  3xl:w-[60%] '>
						Je suis actuellement à la recherche d'un poste de développeur
						front-end ou fullstack en CDI sur Paris et Bordeaux.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
