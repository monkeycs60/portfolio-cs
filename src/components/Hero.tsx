import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	return (
		<div id='home' className='w-full lg:h-screen p-4 flex flex-col'>
			<div className='flex lg:max-w-[65vw] h-screen gap-16 lg:gap-0 flex-col lg:flex-row justify-between lg:pt-[18vh] 3xl:pt-[25vh] mx-auto relative'>
				<div className='h-full flex flex-col '>
					<div className='flex flex-col h-full gap-14 font-eva text-secondary'>
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
								Je cherchais un métier qui me permette de matérialiser
								mes idées. Je voulais créer quelque chose. Je suis
								devenu développeur.
							</p>
						</div>
						<div className='flex mt-[5vh] gap-12 font-poppins text-2xl'>
							<Link href='#contact'>
								<button className='px-8 py-4 bg-secondary text-tercary border-secondary border-[2px] hover:text-secondary hover:bg-primary'>
									Me contacter
								</button>
							</Link>
							<Link href='https://www.linkedin.com/in/your-profile-name/'>
								<button className='px-8 py-4 border-[2px] border-secondary text-secondary hover:bg-secondary hover:text-tercary'>
									LinkedIn
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className='h-1/2 relative justify-end items-start flex border-[0px] border-gray-300 rounded-full -translate-y-32 '>
					<Image
						src={'/cs-test-3.png'}
						alt='Logo'
						width={837}
						height={648}
						priority={true}
						className={clsx(
							' w-[250px] translate-y-16',
							'xl:w-[1300px] ',
							'3xl:w-[1500px] 3xl:-bottom-0 '
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
