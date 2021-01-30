import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Button from '../components/Button'

export class DeckIndex extends Component {
	render() {
		const { myDecks } = this.props
		return (
			<Fragment>
				<div className='deck-container'>
					<Row>
						<Col xs='12' md='6' lg='4'>
							<h1 className='deck-heading'>My Decks</h1>
						</Col>
					</Row>
					<Row>
						{myDecks.map((deck, index) => {
							return (
								<Link to={`/mydeck/${deck.id}`} key={index}>
									<div className='deck-card-title'>
										<h4>{deck.title}</h4>
										<p>{deck.description}</p>
									</div>
								</Link>
							)
						})}
					</Row>
					<Link to={'/decknew'}>
						<Button className='button outline-button'>
							<span>Create New Deck</span>
						</Button>
					</Link>
				</div>
			</Fragment>
		)
	}
}

export default DeckIndex
