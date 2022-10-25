import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';
import { AxiosResponse } from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RowDetail } from '../components/RowDetail';
import HouseService from '../services/HouseService';
import { IHouse } from '../types/House';
import RootPage from './root';

const initialState = {
	url: "",
	name: "",
	region: "",
	coatOfArms: "",
	words: "",
	titles: [],
	seats: [],
	currentLord: [],
	heir: "",
	overlord: "",
	founded: "",
	founder: "",
	diedOut: "",
	ancestralWeapons: [],
	cadetBranches: [],
	swornMembers: []
};

const House: FC = () => {
	const params = useParams();
	const [house, setHouse] = useState<IHouse>(initialState);
	const navigate = useNavigate();

	useEffect(() => {
		if (!!params.id) {
			getHouseDetails(params.id);
		}
	}, [params.id]);
	
	const getHouseDetails = (id: string) => {
		HouseService.findHouse(id).then((res: AxiosResponse) => setHouse(res.data));
	}

	return (
		<RootPage header='House'>
			<div className="px-6 overflow-hidden bg-white shadow sm:rounded-lg">
				<div className="px-2 py-3 md:px-4">
					<button onClick={() => navigate("/houses")} className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">
						<ArrowSmallLeftIcon className="w-4 h-4 mr-2"/>Go back
    			</button>
				</div>
				<div className="px-2 py-5 md:px-4 sm:px-6">
					<h3 className="text-lg font-medium leading-6 text-gray-900">House Details</h3>
					<p className="max-w-2xl mt-1 text-sm text-gray-500">Read all information</p>
				</div>
				<div className="px-2 border-t border-gray-200 md:px-4">
					<dl>
						{house.name.length > 0 && (
							<RowDetail title='Name' text={house.name} isGray={true} />
						)}
						{house.region.length > 0 && (
							<RowDetail title='Region' text={house.region} isGray={false} />
						)}
						{house.coatOfArms.length > 0 && (
							<RowDetail title='Coat of Arms' text={house.coatOfArms} isGray={true} />
						)}
						{house.founded.length > 0 && (
							<RowDetail title='Founded' text={house.founded} isGray={false} />
						)}
						{house.diedOut.length > 0 && (
							<RowDetail title='Died Out' text={house.diedOut} isGray={true} />
						)}
						{house.titles.length > 0 && house.titles[0].length > 0 && (
							<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Titles</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									<ul className="border border-gray-200 divide-y divide-gray-200 rounded-md">
										{house.titles.map((ttl: string, index: number) => (
											<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm" key={index}>
											<div className="flex items-center flex-1 w-0">
												<svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path fillRule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clipRule="evenodd" />
												</svg>
												<span className="flex-1 w-0 ml-2 truncate">{ttl}</span>
											</div>
										</li>
										))}
									</ul>
								</dd>
							</div>
						)}
					</dl>
				</div>
			</div>
		</RootPage>
	)
}

export default House;