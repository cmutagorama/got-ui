import http from "../http-common";
import { IHouse } from "../types/House";

const getAll = (page: number = 1, pageSize: number = 12, name?: string) => {
	const URL = !!name ? `/api/houses?page=${page}&pageSize=${pageSize}&name=House ${name}` : `/api/houses?page=${page}&pageSize=${pageSize}`;
	return http.get<IHouse[]>(URL);
}

const findHouse = (id: string) => {
	return http.get<IHouse>(`/api/houses/${id}`);
}

const HouseService = {
	getAll,
	findHouse
}

export default HouseService;