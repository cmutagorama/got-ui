import http from "../http-common"
import { ICharacter } from "../types/Character";

const getAll = () => {
	return http.get<ICharacter>('/api/characters');
}

const CharacterService = {
	getAll
}

export default CharacterService;