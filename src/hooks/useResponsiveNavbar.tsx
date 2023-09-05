// useClosedPercentage.ts
import { useState, useEffect } from 'react';

const useResponsiveNavbar = () => {
	const [closedPercentage, setClosedPercentage] = useState('85%');

	useEffect(() => {
		const adjustPercentage = () => {
			const width = window.innerWidth;

			if (width < 1280) {
				setClosedPercentage('100%');
			} else if (width < 1536) {
				setClosedPercentage('75%');
			} else if (width < 1920) {
				setClosedPercentage('80%');
			} else if (width >= 1920) {
                setClosedPercentage('85%');
            }
		};

		adjustPercentage();
		window.addEventListener('resize', adjustPercentage);

		return () => {
			window.removeEventListener('resize', adjustPercentage);
		};
	}, []);

	return closedPercentage;
};

export default useResponsiveNavbar;
