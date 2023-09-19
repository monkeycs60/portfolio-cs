import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	return (
		<div id='home' className='w-full lg:h-screen p-4 flex flex-col'>
			<div className='flex max-w-[90vw] lg:max-w-[65vw] h-screen gap-16 lg:gap-0 flex-col lg:flex-row justify-between pt-[3vh] lg:pt-[18vh] 3xl:pt-[25vh] mx-auto relative'>
				<div className='h-full flex flex-col '>
					<div className='flex flex-col h-full gap-4 lg:gap-14 font-eva text-secondary'>
						<div className='flex flex-col gap-4'>
							<h1 className='text-5xl lg:text-6xl 2xl:text-8xl'>
								Clément <span className='block uppercase'>Serizay</span>
							</h1>
							<h2 className='text-2xl 2xl:text-4xl font-poppins'>
								Développeur Fullstack Javascript
							</h2>
						</div>
						<div className='2xl:w-[80%] lg:mt-[5vh] flex items-center font-poppins text-sm lg:text-lg 2xl:text-xl 3xl:text-2xl'>
							<p className=''>
								Je cherchais un métier qui me permette de matérialiser
								mes idées. Je voulais créer quelque chose. Je suis
								devenu développeur.
							</p>
						</div>
						<div className=' lg:mt-6 2xl:mt-[5vh] font-poppins text-sm lg:text-base 2xl:text-2xl'>
							<div className='flex justify-center lg:hidden'>
								<Image
									src={'/cs-test-3.png'}
									alt='Logo'
									width={837}
									height={648}
									priority={true}
									className=' w-[280px]'
								/>
							</div>
							<div className='mt-6 lg:mt-0 flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:flex-row gap-4 lg:gap-12'>
								<Link href='#contact'>
									<button className='px-8 py-4 w-[240px]  lg:w-[240px] 3xl:w-[250px] bg-secondary text-tercary border-secondary border-[2px] hover:text-secondary hover:bg-primary'>
										Me contacter
									</button>
								</Link>
								<Link href='https://www.linkedin.com/in/cl%C3%A9ment-serizay-044911262/' target='_blank' >
									<button className='px-8 py-4 w-[240px]  lg:w-[240px] 3xl:w-[250px] border-[2px] border-secondary text-secondary hover:bg-secondary hover:text-tercary'>
										LinkedIn
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='h-1/2 relative justify-end items-start hidden lg:flex border-[0px] border-gray-300 rounded-full translate-x-8 -translate-y-20 2xl:-translate-x-0 2xl:-translate-y-32 '>
					<Image
						src={'/cs-test-3.png'}
						alt='Logo'
						width={837}
						height={648}
						priority={true}
						className={clsx(
							' w-[250px] translate-y-16',
							'xl:w-[1000px] ',
							'2xl:w-[1300px] ',
							'3xl:w-[1500px] 3xl:-bottom-0 '
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
