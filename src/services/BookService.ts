import http from "../http-common"
import { IBook } from "../types/Book"

const getAll = () => {
	return http.get<IBook>('/api/books');
}

const BookService = {
	getAll
}

export default BookService;