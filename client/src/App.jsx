import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Banner from './components/Banner'
import CardList from './components/CardList'
import Footer from './components/Footer'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<Router>
			<NavigationBar />
			<Banner />
			<CardList />
			<Footer />
		</Router>
	)
}

export default App
