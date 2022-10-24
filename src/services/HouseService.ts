import http from "../http-common";
import { IHouse } from "../types/House";

const getAll = (page: number = 1, pageSize: number = 12) => {
	return http.get<IHouse[]>(`/api/houses?page=${page}&pageSize=${pageSize}`);
}

const findHouse = (id: string) => {
	return http.get<IHouse>(`/api/houses/${id}`);
}

const HouseService = {
	getAll,
	findHouse
}

export default HouseService;