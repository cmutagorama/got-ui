import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { FC } from 'react';

type SearchProps = {
	sendQuery: (e: string) => void
}

const SearchInput: FC<SearchProps> = ({ sendQuery }) => {

	const handleChange = (e: any) => {
		e.preventDefault();
		sendQuery(e.target.value);
	}

	return (
		<div className="flex justify-end">
			<div className="w-full px-4 py-3 md:w-80">		
				<label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
					</div>
					<input
						type="search"
						id="default-search"
						className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search name..."
						required
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default SearchInput;