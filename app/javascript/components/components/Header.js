import React, { Component, Fragment } from 'react'
import logo from '../assets/logo.png'

class Header extends Component {
	render() {
		const { loggedIn } = this.props

		return (
			<Fragment>
				<header>
					<a href='/' className='banner-image'>
						<img className='brand' src={logo} alt='' />
					</a>
					<nav className='primary-menu'>
						<ul>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='/about'>About Us</a>
							</li>
							{loggedIn && (
								<>
									<li>
										<a href='/users/sign_out'>Sign Out</a>
									</li>
									<li>
										<a href='/mydecks'>My Decks</a>
									</li>
								</>
							)}
							{!loggedIn && (
								<>
									<li>
										<a href='/users/sign_up'>Sign Up</a>
									</li>
									<li>
										<a href='/users/sign_in'>Login</a>
									</li>
								</>
							)}
						</ul>
					</nav>
				</header>
			</Fragment>
		)
	}
}

export default Header
