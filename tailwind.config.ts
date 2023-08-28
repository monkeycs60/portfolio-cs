import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			circular: ['Circular Std', 'sans-serif'],
			circularMedium: ['Circular Std Medium', 'sans-serif'],
			circularLight: ['Circular Std Light', 'sans-serif'],
		},
		extend: {
			colors: {
				'gray-cool': {
					modern: '##F8FAFC',
					25: '#FCFCFD',
					50: '#F9F9FB',
					100: '#EFF1F5',
					300: '#B9C0D4',
					400: '#7D89B0',
					500: '#5D6B98',
					600: '#4A5578',
					700: '#404968',
					800: '#30374F',
					950: '#0E101B',
				},
			},
			backgroundImage: {},
			screens: {
				'3xl': '2200px',
			},
		},
	},
	plugins: [],
};
export default config
