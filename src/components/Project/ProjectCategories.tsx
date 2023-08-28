interface ContentProps {
	content: React.ReactNode;
}

export const MyRole = ({ content }: ContentProps) => {
	return <div>{content || "Texte sur 'Mon rôle'."}</div>;
};

export const ProjectDescription = ({ content }: ContentProps) => {
	return <div>{content || 'Description détaillée du projet.'}</div>;
};

export const Technologies = ({ children }: { children?: React.ReactNode }) => {
	return <div>{children || 'Détails sur les technologies.'}</div>;
};