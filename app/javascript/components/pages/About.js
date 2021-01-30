import React, { Component, Fragment } from 'react'
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardImg,
	Row,
	Col,
} from 'reactstrap'

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import team from '../../aboutData'

export class About extends Component {
	render() {
		return (
			<Fragment>
				<div className='about-container'>
					<div className='about-heading'>
						<h1>About Us</h1>
					</div>

					<div className='about-group-content'>
						<p>
							Study Up was an idea implemented by four enthusiastic Web
							Development bootcamp grads, as an easy way for kids and adults to
							study using flashcards. Together the Developers Amanda, Alan,
							Chris and Matt organized their talents, to create such an app to
							give to the world. Each teammate was represented with unique
							skills to incorporate into Study Up and together they teamed up to
							become known as “The Console.Loggers.”
						</p>

						<p>
							Amanda the “Tech Lead”, instituted the code specs and prioritized
							key component functionality and usability. Along with Alan, the
							“Design Lead”, guided the page's design and executed the UI in
							responsiveness and styling. Chris in “Communications”, clarified
							daily changes and tested backend structure to validate each
							database. Along with Matt, the “Product Manager”, ensured
							requirements were met and analyzed the Dictionary APIs specs to
							incorporate into Study Up.
						</p>
						<p>
							Every aspect of Study Up individualizes their skills and
							formulates it into a fully customizable flashcard app. That idea
							of creating a simple flashcard app for all is only just the
							beginning for the ambitious team. Their experience together at
							LEARN Academy bootcamp in San Diego, has prepared them to execute
							Web Development properly. Now maintaining a new goal of growth in
							software creation and education. Determined, they head in
							different directions to aid in the growth of technology, to aid in
							the growth of humanity and to aid in the growth of the mind
							itself, so Study Up!
						</p>
					</div>

					<div className='team-card-container'>
						<Row>
							{team.map((person, index) => {
								return (
									<Col xs='12' md='6'>
										<Card className='about-card' key={index}>
											<CardImg
												className='about-image'
												top
												width='100%'
												src={person.image}
												alt={person.name}
											/>
											<CardBody>
												<CardTitle tag='h3'>{person.name}</CardTitle>
												<CardTitle tag='h5'>{person.role}</CardTitle>
												<CardText className='about-text'>{person.bio}</CardText>
												<div className='card-icon-container'>
													<div className='card-icon'>
														<a href={person.linkedin} target='_blank'>
															<FaLinkedin size={35} />
														</a>
													</div>
													<div className='card-icon'>
														<a href={person.github} target='_blank'>
															<FaGithubSquare size={35} />
														</a>
													</div>
												</div>
											</CardBody>
										</Card>
									</Col>
								)
							})}
						</Row>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default About
