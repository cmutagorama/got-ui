import { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import BookService from "../services/BookService";
import { IBook } from "../types/Book";
import { formatDate } from "../utils";
import RootPage from "./root";

const Books: FC = () => {
	const [books, setBooks] = useState<IBook[]>([]);

	useEffect(() => {
		getBooks();
	}, []);

	const getBooks = () => {
		BookService.getAll().then((res: AxiosResponse) => {
			setBooks(res.data);
		}).catch((e: Error) => {
			// can set error message
			console.log(e);
		})
	}

	return (
		<RootPage header="Books">
			<div className="flex flex-col px-8 mt-6">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
							<table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Name
										</th>
										<th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Publisher
										</th>
										<th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											ISBN
										</th>
										<th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Country
										</th>
										<th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Media Type
										</th>
										<th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
											Released Date
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{books.map((book: IBook, index: number) => (	
										<tr className="transition-all hover:bg-gray-100 hover:shadow-lg hover:cursor-pointer" key={index}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{book.name}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-700">{book.publisher}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-700">{book.isbn}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-700">{book.country}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-700">{book.mediaType}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-700">{formatDate.format(new Date(book.released))}</div>
											</td>
										</tr>
									)) }
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</RootPage>
	)
}

export default Books;