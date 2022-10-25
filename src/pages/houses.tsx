import React, { FC, useEffect, useState } from 'react'
import { CardItem } from '../components/CardItem';
import HouseService from '../services/HouseService';
import RootPage from './root'
import { AxiosResponse } from 'axios';
import { IHouse } from '../types/House';
import { Skeleton } from '../components/Skeleton';
import { Pagination } from "react-headless-pagination";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Select from '../components/Select';
import Search from '../components/Search';

const Houses: FC = () => {
	const options: number[] = [12, 24, 48, 96];
	const [houses, setHouses] = useState<IHouse[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const [page, setPage] = useState<number>(0);
	const [pageSize, setPageSize] = useState<number>(12);
	const [query, setQuery] = useState<string>('');

	const handlePageChange = (page: number) => {
		setPage(page);
	};

	// Get paginated houses (page, pageSize)
	// useEffect(() => {
	// 	getHouses(page + 1, pageSize);
	// }, [page, pageSize]);

	// Get houses on initial load
	// useEffect(() => {
	// 	getHouses();
	// }, []);
	
	const getHouses = (page?: number, pageSize?: number, name?: string) => {
		setLoading(true);

		HouseService.getAll(page, pageSize, name).then((res: AxiosResponse) => {
			setLoading(false);
			setHouses(res.data);
		}).catch((e: Error) => {
			setLoading(false);
			console.log(e);
		});
	}

	const receivePageSize = (e: number) => setPageSize(e);

	const receiveQuery = (e: string) => {
		setQuery(e);
	};

	useEffect(() => {
		getHouses(page + 1, pageSize, query);
	}, [page, pageSize, query]);
	

	return (
		<RootPage header='houses'>
			<>
				<Search sendQuery={receiveQuery}/>
				<div className="grid gap-4 px-4 py-3 md:grid-cols-4">
					{loading ? (
						<>
							{[...Array(8)].map((i, index: number) => <Skeleton key={index}/>)}
						</>
					) : (
						<>
							{houses.map((house: IHouse, index: number) =>
								<CardItem
									key={index}
									name={house.name}
									words={house.words}
									url={house.url.split("/")[house.url.split("/").length - 1]}
								/>
							)}
						</>
					)}
				</div>

				{!loading && houses.length > 1 && (
					<div className="flex flex-col items-center px-4 py-3 space-x-0 md:flex-row md:space-x-4">
						<div className="flex flex-row items-center justify-center space-x-3">
							<p className="text-xs">Items per page</p>
							<Select presetValue={pageSize} items={options} sendData={receivePageSize} />
						</div>

						<Pagination
							className="flex items-center justify-between w-full h-10 text-sm select-none md:justify-center"
							currentPage={page}
							edgePageCount={2}
							middlePagesSiblingCount={1}
							setCurrentPage={handlePageChange}
							totalPages={10}
							truncableClassName="w-10 px-0.5 text-center"
							truncableText="..."
						>
							<Pagination.PrevButton className="flex items-center mr-2 text-gray-500 opacity-50 hover:text-gray-600 focus:outline-none">
								<ArrowLeftIcon className="w-4 h-4 mr-2" />
								Previous
							</Pagination.PrevButton>
							<div className="items-center justify-center hidden mx-5 md:flex">
								<Pagination.PageButton
									activeClassName="bg-blue-50 text-blue-600"
									className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
									inactiveClassName="text-gray-500"
								/>
							</div>
							<Pagination.NextButton className="flex items-center mr-2 text-gray-500 cursor-pointer hover:text-gray-600 focus:outline-none">
								Next
								<ArrowRightIcon className="w-4 h-4 ml-2" />
							</Pagination.NextButton>
						</Pagination>
					</div>
				)}
			</>
		</RootPage>
	)
}

export default Houses;