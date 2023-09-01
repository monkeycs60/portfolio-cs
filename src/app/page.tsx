import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import TechStack from '@/components/TechStack';

export default function Home() {
	return (
		<>
			<Hero />
			<AboutMe />
			<TechStack />
			<Project />
			<Contact />
		</>
	);
}
