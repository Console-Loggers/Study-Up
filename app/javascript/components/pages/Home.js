import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
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
							<Link>
								<Button className='button-outline-button'>
									<span>Sign Up</span>
								</Button>
							</Link>

							<Link>
								<Button className='button-outline-button'>
									<span>Login</span>
								</Button>
							</Link>
						</div>
					</div>

					<div className='home-content-container'>
						<div className='home-content-text'>
							<h3>
								Create fully customizable flashcards for anything you need to
								study! Conveniently access from anywhere!
							</h3>
						</div>

						<div className='icon-container'>
							<div className='icon-group'>
								<div className='icon'>
									<BiPencil size={50} />
								</div>
								<div className='icon-text'>
									<p>Fully Customizable</p>
								</div>
							</div>

							<div className='icon-group'>
								<div className='icon'>
									<BiSmile size={50} />
								</div>
								<div className='icon-text'>
									<p>Easy to Use</p>
								</div>
							</div>

							<div className='icon-group'>
								<div className='icon'>
									<BiLandscape size={50} />
								</div>
								<div className='icon-text'>
									<p>On The Go</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Home
