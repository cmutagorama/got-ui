import React, { FC, useEffect, useState } from 'react'
import { CardItem } from '../components/CardItem';
import HouseService from '../services/HouseService';
import RootPage from './root'
import { AxiosResponse } from 'axios';
import { IHouse } from '../types/House';

const Home: FC = () => {
	const [houses, setHouses] = useState<IHouse[]>([]);

	useEffect(() => {
		getHouses();
	}, [])
	
	const getHouses = () => {
		HouseService.getAll().then((res: AxiosResponse) => {
			setHouses(res.data);
		}).catch((e: Error) => {
			console.log(e);
		});
	}

	return (
		<RootPage header='home'>
			<div className="grid gap-4 px-4 py-3 md:grid-cols-4">
				{houses.map((house, index) => <CardItem key={index} name={house.name} words={house.words} url={house.url} />)}
			</div>
		</RootPage>
	)
}

export default Home;