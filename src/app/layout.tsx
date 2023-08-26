import Navbar from '@/components/layout/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Portfolio Clément Serizay',
	description: 'Clément Serizay, développeur fullstack react node js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body className='m-auto flex flex-col justify-center overflow-x-hidden'>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
