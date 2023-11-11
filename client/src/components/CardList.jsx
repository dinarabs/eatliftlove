import { Card, CardFooter, Image, CardBody } from '@nextui-org/react'
import wodCard from '../assets/wod-card.jpg'
import movementCard from '../assets/movement-card.jpg'
import findagymCard from '../assets/findagym-card.jpg'

const CardList = () => {
	const list = [
		{
			title: 'WOD',
			img: wodCard,
		},
		{
			title: 'Movements',
			img: movementCard,
		},
		{
			title: 'Find a gym nearby',
			img: findagymCard,
		},
	]

	return (
		<div className="flex item-center justify-between px-6 py-2 max-w-[1024px] mx-auto">
			{list.map((item, index) => (
				<Card
					shadow="sm"
					key={index}
					isPressable
					onPress={() => console.log('item pressed')}
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
