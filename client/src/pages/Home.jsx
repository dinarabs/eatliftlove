import Banner from '../components/Banner'
import CardList from '../components/CardList'
import wodCard from '../assets/wod-card.jpg'
import movementCard from '../assets/movement-card.jpg'
import findagymCard from '../assets/findagym-card.jpg'

const Home = () => {
	const options = [
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
		<>
			<Banner />
			<CardList list={options} />
		</>
	)
}

export default Home
