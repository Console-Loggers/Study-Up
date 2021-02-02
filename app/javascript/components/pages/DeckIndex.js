import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { BsTrash, BsPencil } from 'react-icons/bs'
import Button from '../components/Button'

export class DeckIndex extends Component {
	render() {
		const { decks, deleteDeck } = this.props
		return (
			<Fragment>
				<Container>
					<Row>
						<Col xs='12' md='6' lg='4'>
							<h1 className='page-title'>My Decks</h1>
						</Col>
					</Row>
					<Row>
						{decks.map((deck, index) => {
							return (
								<Fragment key={index}>
									<div className='deck-container'>
										<div className='deck-content'>
											<a href={`/mydeck/${deck.id}`}>
												<div className='deck-text-card'>
													<h4>{deck.title}</h4>
													<p>{deck.description}</p>
												</div>
											</a>
										</div>

										<div className='deck-icon-container'>
											<div className='deck-icons'>
												<a href={`/deckedit/${deck.id}`}>
													<BsPencil size={30} />
												</a>
											</div>
											<div className='deck-icons'>
												<a href={`/mydecks`}>
													<BsTrash
														size={30}
														onClick={() => deleteDeck(deck.id)}
													/>
												</a>
											</div>
										</div>
									</div>
								</Fragment>
							)
						})}
					</Row>
					<Link to={'/decknew'}>
						<Button className='button blue-solid-button'>
							<span>Create Custom Deck</span>
						</Button>
					</Link>
					<Link to={'/decknewvocab'}>
						<Button className='button blue-solid-button'>
							<span>Create Vocab Deck</span>
						</Button>
					</Link>
				</Container>
			</Fragment>
		)
	}
}

export default DeckIndex
