import RootPage from "./root"

type IMember = {
	name: string;
	position: string;
}

const members: IMember[] = [
	{
		name: "Holden Caulfield",
		position: "CEO"
	},
	{
		name: "Henry Letham",
		position: "Director"
	},
	{
		name: "Oskar Blinde",
		position: "Producer"
	},
	{
		name: "Martin Eden",
		position: "Actor"
	},
	{
		name: "Atticus Finch",
		position: "Actor"
	},
	{
		name: "Rodrigo Monchi",
		position: "Animation Designer"
	}
]

export const About = () => {
	return (
		<RootPage header="About">
			<section className="text-gray-700 border-t border-gray-200 body-font">
				<div className="container px-5 py-10 mx-auto">
					<div className="flex flex-col w-full mb-20 text-center">
						<h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Our Team</h1>
						<p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
					</div>
					<div className="flex flex-wrap -m-2">
						{members.map((member: IMember, index: number) => (
							<div className="w-full p-2 lg:w-1/3 md:w-1/2" key={index}>
								<div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
									<img alt="team" className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full" src="https://dummyimage.com/80x80/edf2f7/a5afbd" />
									<div className="flex-grow">
										<h2 className="font-medium text-gray-900 title-font">{member.name}</h2>
										<p className="text-gray-500">{member.position}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</RootPage>
	)
}