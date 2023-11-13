import { useEffect, useState } from 'react'
import fetchImages from '../services/unsplashImageService'
import getWODs from '../services/workoutService'

const Workout = () => {
	const [backgroundImage, setBackgroundImage] = useState('')
	const [data, setData] = useState([])
	console.log(data)

	useEffect(() => {
		// eslint-disable-next-line no-unused-vars
		const loadImages = async () => {
			const images = await fetchImages('crossfit')
			if (images.length > 0) {
				// Randomly select an image
				const randomIndex = Math.floor(Math.random() * images.length)
				setBackgroundImage(images[randomIndex].urls.regular)

				// Set a timeout to change the image after 24 hours
				setTimeout(() => {
					const newIndex = Math.floor(Math.random() * images.length)
					setBackgroundImage(images[newIndex].urls.regular)
				}, 86400000) // 24 hours in milliseconds
			}
		}

		loadImages()
	}, [])

	useEffect(() => {
		const loadWOD = async () => {
			const WODs = await getWODs()

			// Randomly select a WOD
			const randomIndex = Math.floor(Math.random() * WODs.length)
			setData(WODs[randomIndex])

			// Set a timeout to change the WOD after 24 hours
			setTimeout(() => {
				const newIndex = Math.floor(Math.random() * WODs.length)
				setData(WODs[newIndex])
			}, 86400000) // 24 hours in milliseconds
		}

		loadWOD()
	}, [])

	return (
		<div
			style={{ backgroundImage: `url(${backgroundImage})` }}
			className="w-full h-screen bg-cover bg-center flex justify-center items-center"
		>
			<div className="bg-black w-96 h-[32rem] ">
				<div className="">
					<h1 className="text-3xl font-bold text-center text-white p-3">
						Workout of the Day
					</h1>
					<p className="text-center text-white p-10 z-10">
						<b> {data.description}</b> <br />
						<b> {data.levels}</b> <br />
					</p>
				</div>
			</div>
		</div>
	)
}

export default Workout
