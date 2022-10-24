/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from "react";
import { ICharacter } from "../types/Character";
import { paginate } from "../utils";
import { Pagination } from "react-headless-pagination";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

type PaginationProps = {
	items: ICharacter[];
	initialPage?: number;
	pageSize?: number;
	maxPages?: number;
	changePage: (page: ICharacter[]) => void
}

type IPager = {
	totalItems: number;
	currentPage: number;
	pageSize: number;
	totalPages: number;
	startPage: number;
	endPage: number;
	startIndex: number;
	endIndex: number;
	pages: number[]
}

const initialState: IPager = {
	totalItems: 0,
	currentPage: 0,
	pageSize: 0,
	totalPages: 0,
	startPage: 0,
	endPage: 0,
	startIndex: 0,
	endIndex: 0,
	pages: []
}

const CustomPagination: FC<PaginationProps> = ({ items, initialPage = 1, pageSize, maxPages = 10, changePage }) => {
	const [pager, setPager] = useState<IPager>(initialState);

	useEffect(() => {
		setPage(initialPage);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items, pageSize]);

	const setPage = (page: number) => {
		// get new pager object for specified page
		const pager = paginate(items.length, page, pageSize, maxPages);
		setPager(pager);

		// get new page of items from items array
		const pageOfItems: ICharacter[] = items.slice(pager.startIndex, pager.endIndex + 1);

		// call change page function in parent component
		changePage(pageOfItems)
	}

	const handlePageChange = (page: number) => {
		setPage(page + 1);
	};

	return (
		<Pagination
			className="flex items-center justify-between w-full h-10 text-sm select-none md:justify-center"
			currentPage={pager.currentPage - 1}
			edgePageCount={2}
			middlePagesSiblingCount={1}
			setCurrentPage={handlePageChange}
			totalPages={pager.totalPages}
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
	)
}

export default CustomPagination;