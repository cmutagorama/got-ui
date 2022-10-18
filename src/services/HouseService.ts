import http from "../http-common";
import { IHouse } from "../types/House";

const getAll = () => {
	return http.get<IHouse[]>("/api/houses");
}

const findHouse = (id: string) => {
	return http.get<IHouse>(`/api/houses/${id}`);
}

const HouseService = {
	getAll,
	findHouse
}

export default HouseService;