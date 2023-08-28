'use client';

import HeroTop from './Hero/HeroTop';
import HeroBottom from './Hero/HeroBottom';

const Hero = () => {
	return (
		<div className='w-full h-screen p-4 flex flex-col 2xl:pt-[20vh] 3xl:pt-[20vh] '>
			<HeroTop />
			<HeroBottom />
		</div>
	);
};

export default Hero;
