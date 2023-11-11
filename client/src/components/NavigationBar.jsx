import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react'
import Logo from '../assets/eatliftlove.svg'

const NavigationBar = () => {
	return (
		<Navbar isBordered>
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4">
					<img
						className="md:h-12 bg-fuchsia-700 md:w-12 text-white rounded-[--nextui-radius-small]"
						src={Logo}
						alt="Eat Lift Love logo"
					></img>
					<p className="hidden sm:block font-bold text-inherit font-mono p-3">
						eat lift love
					</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent as="div" className="items-center" justify="end">
				<Input
					classNames={{
						base: 'max-w-full sm:max-w-[11rem] h-10',
						mainWrapper: 'h-full',
						input: ['text-small'],
						inputWrapper:
							'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
					}}
					placeholder="Search movements..."
					size="sm"
					type="search"
				/>
			</NavbarContent>
		</Navbar>
	)
}

export default NavigationBar
