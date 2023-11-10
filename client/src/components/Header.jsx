const Header = () => {
	return(
		<header className="header">
			<div className='logo'>
			<img src='/eatliftlove.svg' alt='eatliftlove logo' />
			</div>
			<div className='search'>
				<input type='text' placeholder='Search' />
			</div>
		</header>
	)
}

export default Header;