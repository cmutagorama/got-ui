// export type ICharacter = {
// 	url: string;
// 	name: string;
// 	culture: string;
// 	born: string;
// 	died: string,
// 	titles: string[];
// 	aliases: string[];
// 	father: string;
// 	mother: string;
// 	spouse: string;
// 	allegiances: string[];
// 	books: string[];
// 	povBooks: string[];
// 	tvSeries: string[];
// 	playedBy: string[];
// }

export type ICharacter = {
	id: number;
	firstName: string;
	lastName: string;
	fullName: string;
	title: string;
	family: string;
	image: string;
	imageUrl: string;
}