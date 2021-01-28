import React, { Component, Fragment } from 'react'
import Button from '../components/Button'
import { BiPencil, BiSmile, BiGame, BiLandscape } from 'react-icons/bi'

export class Home extends Component {
	render() {
		return (
			<Fragment>
				<div className='home-container'>
					<div className='hero-container'>
						<h1 className='home-title'>Welcome to Study Up</h1>
						<div className='button-container'>
							<Button className='button-outline-button'>
								<span>Sign Up</span>
							</Button>

							<Button className='button-outline-button'>
								<span>Login</span>
							</Button>
						</div>
					</div>
					<div className='home-content-container'>
						<div className='home-content-text'>
							<h3>
								Create fully customizable flashcards for anything you need to
								study! Conveniently access from anywhere!
							</h3>
						</div>
						<div className='icon-container'></div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Home
