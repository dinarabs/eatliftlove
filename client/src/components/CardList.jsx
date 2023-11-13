import { Card, CardFooter, Image, CardBody } from '@nextui-org/react'
import wodCard from '../assets/wod-card.jpg'
import movementCard from '../assets/movement-card.jpg'
import findagymCard from '../assets/findagym-card.jpg'
import { useNavigate } from 'react-router-dom'

// TODO pass as props the list fields to re-use this component in Movement.jsx
const CardList = () => {
	const navigate = useNavigate()

	const list = [
		{
			title: 'WOD',
			img: wodCard,
			navLink: '/wod',
		},
		{
			title: 'Movements',
			img: movementCard,
			navLink: '/movements',
		},
		{
			title: 'Find a gym nearby',
			img: findagymCard,
			navLink: '/findagym',
		},
	]

	return (
		<div className="flex justify-between p-5 w-[1024px] mx-auto">
			{list.map((item, index) => (
				<Card
					shadow="sm"
					key={index}
					isPressable
					onPress={() =>
						setTimeout(() => {
							navigate(item.navLink)
						}, 500)
					}
				>
					<CardBody className="overflow-visible p-0 w-[260px]">
						<Image
							shadow="sm"
							radius="lg"
							width="100%"
							alt={item.title}
							className="w-full object-cover h-[240px]"
							src={item.img}
						/>
					</CardBody>
					<CardFooter className="text-small justify-center">
						<b>{item.title}</b>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}

export default CardList
