import Image from 'next/image';

export const CoworkezDescription = () => {
	return (
		<div className='flex flex-col gap-8  font-poppins text-sm lg:text-base 2xl:text-md'>
			<div className='flex flex-col gap-4 2xl:leading-7'>
				<p className='italic text-sm'>
					Coworkez Malin est une application communautaire fullstack bâtie
					avec Next.js.
				</p>
				<p>
					L'idée de cette application m'est venue peu après avoir déménagé
					dans une nouvelle ville pour commencer une formation à distance
					de développeur web.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<p>
					Je n'avais pas de cadre de travail, pas de bureau et aucun
					collègue. M'inscrire dans un espace de coworking classique
					m'était impossible étant donné les tarifs pratiqués. J'ai donc
					commencé à chercher des cafés où travailler tranquillement sans
					me ruiner. Mais sans connaître la ville, c'était une vraie tâche
					de fourmi que de dégoter les bons spots.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<p>
					C'est comme ça que{' '}
					<span className='font-semibold'>coworkezmalin.com</span> est né.
					Je voulais créer un espace communautaire où chacun puisse
					consulter et ajouter des endroits conviviaux et peu onéreux où travailler, se rencontrer et échanger. 
				</p>
			</div>
		</div>
	);
};
