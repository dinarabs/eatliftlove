import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import Logo from '../assets/eatliftlove.svg'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const NavigationBar = () => {
	return (
		<Navbar isBordered>
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4">
					<Link to="/">
						<img
							className="md:h-12 bg-gradient-to-br from-indigo-500 to-pink-500 md:w-12 text-white rounded-[--nextui-radius-small]"
							src={Logo}
							alt="Eat Lift Love logo"
						></img>
					</Link>
					<p className="hidden sm:block font-bold text-inherit font-mono p-3">
						eat lift love
					</p>
				</NavbarBrand>
			</NavbarContent>
			<SearchBar />
		</Navbar>
	)
}

export default NavigationBar
