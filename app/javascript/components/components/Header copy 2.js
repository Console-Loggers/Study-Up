import React, { useState, Fragment } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap'

import logo from '../assets/logo.png'

const Header = ({ loggedIn, signIn, signOut }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<div className='header-container'>
			<Navbar expand='md'>
				<NavbarBrand className='banner-image' href='/'>
					<img className='brand' src={logo} alt='Study Up Logo' />
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto primary-menu'>
						<NavItem>
							<NavLink href='/'>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/about'>About Us</NavLink>
						</NavItem>
						{loggedIn && (
							<>
								<NavItem>
									<NavLink href='/users/sign_out'>Sign Out</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href='/mydecks'>My Decks</NavLink>
								</NavItem>
							</>
						)}
						{!loggedIn && (
							<>
								<NavItem>
									<NavLink href='/users/sign_up'>Sign Up</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href='/users/sign_in'>Login</NavLink>
								</NavItem>
							</>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	)
}

export default Header
