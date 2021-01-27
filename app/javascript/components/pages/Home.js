import React, { Component, Fragment } from 'react'
import Button from '../components/Button'
import { GiBookshelf, GiWhiteBook, GiBookmarklet } from 'react-icons/gi'

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
								We are study up and this is just a for example and hopefully it
								looks good lmao
							</h3>
						</div>
						<div className='icon-container'>
							<div className='icon-position1'>
								<GiBookshelf size={35} className='icon-styling' />
								<h1>
									Step 1:
									<br />
									Create a Deck
								</h1>
							</div>
							<GiWhiteBook className='icon-styling' />
							<h1>
								Step 2:
								<br />
								Add Cards
							</h1>
							<GiBookmarklet className='icon-styling' />
							<h1>
								Step 3:
								<br />
								StudyUp!
							</h1>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Home
