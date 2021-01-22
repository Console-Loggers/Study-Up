import React, { Component, Fragment } from 'react'
import Button from '../components/Button'

export class Home extends Component {
	render() {
		return (
			<Fragment>
				<div className='home-container'>
					<div className='hero-container'>
						<h1 className='home-title'>Welcome to Study Up</h1>
						<div className='button-container'>
							<Button className='button outline-button'>
								<span>Sign Up</span>
							</Button>

							<Button className='button outline-button'>
								<span>Login</span>
							</Button>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Home
