import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface ContactButtonProps {
	Icon: FC;
	label: { default: string; toggled?: string };
	link?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	isToggleable?: boolean;
	isToggled?: boolean;
}

const ContactButton = ({
	Icon,
	label,
	link,
	onClick,
	isToggleable,
	isToggled,
}: ContactButtonProps) => {
	const buttonContent = (
		<button
			className={clsx(
				'w-[300px] 2xl:w-[400px] h-[80px] lg:h-[90px] flex justify-center items-center gap-4 font-poppins px-8 py-4 bg-secondary text-tercary border-secondary border-[2px]',
				' hover:text-secondary hover:bg-primary'
			)}
			onClick={onClick}>
			<Icon />
			<span>
				{isToggleable && isToggled ? label.toggled : label.default}
			</span>
		</button>
	);

	return link ? (
		<Link href={link} target='_blank'>
			{buttonContent}
		</Link>
	) : (
		buttonContent
	);
};

export default ContactButton;
