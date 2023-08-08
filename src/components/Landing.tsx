function Landing() {
	return (
		<main className="flex  mt-20 w-full flex-col-reverse md:flex-row justify-between items-center md:items-end md:px-20 ">
			<section className="flex flex-col justify-between md:gap-y-16">
				<div className="flex flex-col gap-y-20  md:items-start items-center">
					<h1 className="md:text-6xl md:gap-0 gap-x-2 text-5xl font-bold flex md:flex-col flex-row">
						<p>Make </p>
						<p>work remote</p>
					</h1>
					<p className="text-mediumGray">
						Get your team in sync, no matter your location.
						<br /> Streamline processes, create team rituals, and
						watch productivity soar.
					</p>
					<a
						className="bg-almostBlack text-almostWhite px-5 py-2"
						href="#"
					>
						Learn more
					</a>
				</div>
				<div className="flex items-center">
					<img src="client-databiz.svg" alt="" />
					<img src="client-audiophile.svg" alt="" />
					<img src="client-meet.svg" alt="" />
					<img src="client-maker.svg" alt="" />
				</div>
			</section>
			<section>
				<img
					width={400}
					srcSet="image-hero-mobile.png 300w, image-hero-desktop.png 850w, "
					alt=""
				/>
			</section>
		</main>
	);
}

export default Landing;
