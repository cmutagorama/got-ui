export const Footer = () => {
	return (
		<div className="flex flex-col justify-between w-full px-5 py-5 space-y-4 md:space-y-0 md:px-20 md:flex-row b-0" style={{ backgroundColor: '#fafafa' }}>
			<div className="flex flex-col space-x-0 space-y-1 text-center md:text-justify md:space-y-0 md:flex-row md:space-x-10">
				<div>
					<p className="text-sm">Follow us on Twitter</p>
				</div>

				<div>
					<p className="text-sm">Follow us on Instagram</p>
				</div>

				<div>
					<p className="text-sm">Follow us on Pinterest</p>
				</div>
			</div>
			<div className="text-center md:text-justify">
				<p className="text-sm">Made with Design in mind.</p>
			</div>
		</div>
	)
}