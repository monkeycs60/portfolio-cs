import clsx from 'clsx';
import Link from 'next/link';

const ContactButton = ({
	Icon,
	label,
	link,
	onClick,
	isToggleable,
	isToggled,
}) => (
	<Link href={link} target='_blank'>
		<button
			className={clsx(
				'w-[400px] h-[90px] flex justify-center items-center gap-4 font-poppins px-8 py-4 bg-secondary text-tercary border-secondary border-[2px]',
				' hover:text-secondary hover:bg-primary'
			)}
			onClick={onClick}>
			<Icon />
			<span>
				{isToggleable && isToggled ? label.toggled : label.default}
			</span>
		</button>
	</Link>
);

export default ContactButton;
