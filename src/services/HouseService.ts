import http from "../http-common";
import { IHouse } from "../types/House";

const getAll = () => {
	return http.get<IHouse[]>("/api/houses");
}

const HouseService = {
	getAll
}

export default HouseService;