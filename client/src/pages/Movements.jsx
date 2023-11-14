import CardList from '../components/CardList'
import { useEffect, useState } from 'react'
import { getMovements } from '../services/movementsService'

const Movements = () => {
	const [data, setData] = useState([])
	// get movements from db
	useEffect(() => {
		const loadMovements = async () => {
			const movements = await getMovements()
			setData(
				movements.map((movement) => {
					return {
						title: movement.name,
						img: movement.imageUrl,
						navLink: `/movements/${movement.name
							.toLowerCase()
							.replace(/\s+/g, '')}`,
					}
				})
			)
		}

		loadMovements() // Call this function when component mounts
	}, [])

	return (
		<div className="text-3xl font-bold text-center text-white">
			<h1 className="p-3">Movements</h1>
			<CardList list={data} />
		</div>
	)
}

export default Movements
