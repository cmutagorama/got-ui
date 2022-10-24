import { FC } from 'react';
import RootPage from './root';

const Home: FC = () => {
	return (
		<RootPage header='home'>
			<div className='p-4'>
				<h3>Landing page</h3>
			</div>
		</RootPage>
	)
}

export default Home;