import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovementByName } from '../services/movementsService'
import { Chip } from '@nextui-org/react'

const MovementDetails = () => {
	const [data, setData] = useState([])
	const { movementName } = useParams()
	const youtubeURL = 'https://www.youtube.com/embed/'

	useEffect(() => {
		// fetch movement by name from db
		const loadMovement = async () => {
			const movement = await getMovementByName(movementName)
			console.log({ movement })
			setData(movement)
		}

		loadMovement() // Call this function when component mounts
	}, [movementName])

	return (
		<div className="flex flex-col px-6 items-center justify-center">
			<div className="text-3xl font-bold text-center text-white p-5">
				<h1>{data.name}</h1>
				<Chip
					variant="shadow"
					classNames={{
						base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
						content: 'drop-shadow shadow-black text-white',
					}}
				>
					{data.category}
				</Chip>
			</div>
			<div className="flex flex-col items-center p-5">
				<iframe
					src={`${youtubeURL}${data.videoId}`}
					title={data.name}
					width="700"
					height="400"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<p className="py-3 w-6/12 text-justify">{data.description}</p>
			</div>
		</div>
	)
}

export default MovementDetails
