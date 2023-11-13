import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Findagym from './pages/Findagym'
import Movements from './pages/Movements'

function App() {
	return (
		<>
			<Router>
				<div className="App">
					<NavigationBar />
					<div className="content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/wod" element={<Workout />} />
							<Route path="/movements" element={<Movements />} />
							<Route path="/findagym" element={<Findagym />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</Router>
		</>
	)
}

export default App
