import axios from "axios";

export default axios.create({
	baseURL: "https://www.anapioficeandfire.com",
	headers: {
		"Content-type": "application/json"
	}
})