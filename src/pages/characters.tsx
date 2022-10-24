import axios, { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "../assets/placeholder.jpeg";
import Pagination from "../components/Pagination";
import Select from "../components/Select";
import { ICharacter } from "../types/Character";
import RootPage from "./root";

const URL = 'https://thronesapi.com/api/v2/Characters';

const Characters: FC = () => {
	const options: number[] = [12, 24, 48];
	const [characters, setCharacters] = useState<ICharacter[]>([]);
	const [pageSize, setPageSize] = useState<number>(12);
	const [paginatedCharacters, setPaginatedCharacters] = useState<ICharacter[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		getCharacters();
	}, []);
	
	const getCharacters = async () => {
		setLoading(true);

		await axios.get(URL).then((res: AxiosResponse) => {
			setLoading(false);
			setCharacters(res.data);
		}).catch((e: Error) => {
			setLoading(false);
			console.log(e);
		});
	}

	const onChangePage = (pageOfItems: ICharacter[]): void => {
		// update current page of items
		setPaginatedCharacters(pageOfItems);
	}

	const receivePageSize = (e: number) => setPageSize(e);

	return (
		<RootPage header="Characters">
			<>
				<div className="grid gap-4 px-4 py-3 md:grid-cols-4">
					{paginatedCharacters.map((char, index) => (
						<div className="relative block bg-black group rounded-xl" key={index}>
							<LazyLoadImage
								className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 rounded-xl group-hover:opacity-50"
								alt={char.title}
								src={char.imageUrl}
								placeholderSrc={placeholder}
							/>

							<div className="relative p-8">
								<p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
									{char.title}
								</p>

								<p className="text-2xl font-bold text-white">{char.fullName}</p>

								<div className="mt-64">
									<div
										className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
									>
										<p className="text-sm text-white">{char.family}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{!loading && characters.length > 0 && (
					<div className="flex flex-col items-center px-4 py-3 space-x-0 md:flex-row md:space-x-4 ">
						<div className="flex flex-row items-center justify-center space-x-3">
							<p className="text-xs">Items per page</p>
							<Select presetValue={pageSize} items={options} sendData={receivePageSize} />
						</div>
						<Pagination items={characters} changePage={onChangePage} pageSize={pageSize} />
					</div>
				)}
			</>
		</RootPage>
	)
}

export default Characters;