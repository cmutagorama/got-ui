import React, { FC } from 'react';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

interface RootpageProps {
	header: string;
	children: string | React.ReactElement;
}

const RootPage: FC<RootpageProps> = (props: RootpageProps) => {
	return (
		<div className="flex flex-col">
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
}

export default RootPage;