'use client';

import { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useScrollControl = () => {
	const [scrollY, setScrollY] = useState(0);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controls = useAnimation();

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
			if (scrollY > lastScrollY) {
				// L'utilisateur descend
				controls.start({ y: '-100%', transition: { duration: 0.2 } });
			} else {
				// L'utilisateur monte
				controls.start({ y: '0%', transition: { duration: 0.2 } });
			}
			setLastScrollY(scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollY, lastScrollY, controls]);

	return {
		controls,
		scrollY,
	};
};

export default useScrollControl;
