import React, { FC, useEffect, useState } from 'react'
import { CardItem } from '../components/CardItem';
import HouseService from '../services/HouseService';
import RootPage from './root'
import { AxiosResponse } from 'axios';
import { IHouse } from '../types/House';
import { Skeleton } from '../components/Skeleton';

const Home: FC = () => {
	const [houses, setHouses] = useState<IHouse[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getHouses();
	}, []);
	
	const getHouses = () => {
		setLoading(true);

		HouseService.getAll().then((res: AxiosResponse) => {
			setLoading(false);
			setHouses(res.data);
		}).catch((e: Error) => {
			setLoading(false);
			console.log(e);
		});
	}

	return (
		<RootPage header='home'>
			<div className="grid gap-4 px-4 py-3 md:grid-cols-4">
				{loading ? (
					<>
						{[...Array(8)].map((index: number) => <Skeleton key={index}/>)}
					</>
				) : (
					<>
						{houses.map((house, index) => <CardItem key={index} name={house.name} words={house.words} url={house.url.split("/")[house.url.split("/").length - 1]} />)}
					</>
				)}
			</div>
		</RootPage>
	)
}

export default Home;