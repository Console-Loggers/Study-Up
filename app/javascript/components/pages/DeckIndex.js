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
								<>
									<div className='deck-container'>
										<div className='deck-content'>
											<Link to={`/mydeck/${deck.id}`}>
												<div className='deck-text-card' key={index}>
													<h4>{deck.title}</h4>
													<p>{deck.description}</p>
												</div>
											</Link>
										</div>

										<div className='icon-container'>
											<div className='icons'>
												<Link to={`/decks/${deck.id}/edit`}>
													<BsPencil size={30} />
												</Link>
											</div>
											<div className='icons'>
												<Link to={`/mydecks`}>
													<BsTrash
														size={30}
														onClick={() => deleteDeck(deck.id)}
													/>
												</Link>
											</div>
										</div>
									</div>
								</>
							)
						})}
					</Row>
					<Link to={'/decknew'}>
						<Button className='button outline-button'>
							<span>Create New Deck</span>
						</Button>
					</Link>
				</Container>
			</Fragment>
		)
	}
}

export default DeckIndex
