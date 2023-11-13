const Banner = () => {
	return (
		<>
			<div className="relative bg-[url('./assets/crossfit-banner.jpg')] h-[400px] w-full bg-cover bg-center flex item-center justify-center">
				<div className="absolute inset-0 bg-black bg-opacity-30"></div>
				<div className="flex flex-col w-full h-full justify-center p-4">
					<h1 className="text-3xl font-bold text-center text-white z-10">
						What is CrossFit?
					</h1>

					<p className="text-center text-white p-10 z-10">
						<b> Functional Fitness:</b> CrossFit prepares you for any physical
						contingency. Workouts are constantly varied, and incorporate
						weightlifting, gymnastics, running, and more. <br />
						<b>Guided by a Coach:</b> CrossFit meets you where you are at. Your
						coach will adjust the workouts to be appropriately challenging for
						you. As you learn what you are able to do now, you will be rewarded
						with a new challenge to pursue next. <br />
						<b>Fueled by Community:</b> CrossFit gyms are not cookie-cutter
						franchises, but instead dynamic and varied independent businesses
						that bring the CrossFit methodology to their local community.
						<br />
						<a
							className="italic"
							href="https://www.crossfit.com/what-is-crossfit "
						>
							By crossfit.com
						</a>{' '}
						<br />
					</p>

					<p className="self-end z-10 text-slate-400">
						Photo by{' '}
						<a href="https://unsplash.com/@johnarano?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
							John Arano
						</a>{' '}
						on{' '}
						<a href="https://unsplash.com/photos/woman-doing-weight-lifting-h4i9G-de7Po?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
							Unsplash
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default Banner
