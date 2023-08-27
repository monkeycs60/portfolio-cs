import Link from "next/link";

interface SocialLinkProps {
    href: string;
    children: string;
    icon: JSX.Element;
}

const SocialLink = ({ href, children, icon }: SocialLinkProps) => (
	<Link href={href} target='_blank' className='flex items-center gap-4 group'>
		{icon}
		<span>{children}</span>
	</Link>
);

export default SocialLink