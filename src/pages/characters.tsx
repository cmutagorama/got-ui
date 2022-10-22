import axios, { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "../assets/placeholder.jpeg";
import { ICharacter } from "../types/Character";
import RootPage from "./root";

const URL = 'https://thronesapi.com/api/v2/Characters';

const Characters: FC = () => {
	const [characters, setCharacters] = useState<ICharacter[]>([]);

	useEffect(() => {
		getCharacters();
	}, []);
	
	const getCharacters = async () => {
		await axios.get(URL).then((res: AxiosResponse) => {
			setCharacters(res.data);
		}).catch((e: Error) => {
			console.log(e);
		});
	}

	return (
		<RootPage header="Characters">
			<div className="grid gap-4 px-4 py-3 md:grid-cols-4">
				{characters.map((char, index) => (
					<div className="relative block bg-black group" key={index}>
						<LazyLoadImage
							className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
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
		</RootPage>
	)
}

export default Characters;