import React from 'react';

const Navbar = () => {
	return (
		<div className='fixed flex justify-between lg:w-screen left-0 top-0 px-[10vw] py-12 text-4xl '>
			<p>
				Clément <span className='uppercase'>Serizay</span>
			</p>
			<p className='uppercase'>Contactez moi</p>
		</div>
	);
};

export default Navbar;
