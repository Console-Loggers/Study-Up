import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Card, CardTitle, CardDeck, CardBody, Row, Col } from 'reactstrap'

import Button from '../components/Button'
import { BiPencil, BiSmile, BiLandscape } from 'react-icons/bi'

export class Home extends Component {
	render() {
		return (
			<Fragment>
				<div className='home-container'>
					<div className='hero-container'>
						<h1 className='home-title'>Welcome to Study Up</h1>
						<div className='button-container'>
							<a href='/users/sign_up'>
								<Button className='button white-solid-button'>
									<span>Sign Up</span>
								</Button>
							</a>

							<a href='/users/sign_in'>
								<Button className='button  blue-solid-button'>
									<span>Login</span>
								</Button>
							</a>
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
							<Row>
								<Col></Col>
							</Row>
							<CardDeck>
								<Card className='m-5 home-card'>
									<BiPencil className='home-icon' size={55} />
									<CardBody>
										<CardTitle tag='h4'>Fully Customizable</CardTitle>
									</CardBody>
								</Card>
								<Card className='m-5 home-card'>
									<BiSmile className='home-icon' size={55} />
									<CardBody>
										<CardTitle tag='h4'>Easy to Use</CardTitle>
									</CardBody>
								</Card>
								<Card className='m-5 home-card'>
									<BiLandscape className='home-icon' size={55} />
									<CardBody>
										<CardTitle tag='h4'>Use Anywhere</CardTitle>
									</CardBody>
								</Card>
							</CardDeck>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Home
