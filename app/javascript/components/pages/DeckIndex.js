import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

export class DeckIndex extends Component {
	render() {
		const { myDecks } = this.props
		return (
			<Fragment>
				<Container>
					<Row>
						<Col xs='12' md='6' lg='4'>
							<h1 className='page-title'>My Decks</h1>
						</Col>
					</Row>
					<Row>
						{myDecks.map((deck, index) => {
							return (
								<Link to={`/mydeck/${deck.id}`} key={index}>
									<div className='deck-title-card'>
										<h4>{deck.title}</h4>
										<p>{deck.description}</p>
									</div>
								</Link>
							)
						})}
					</Row>
				</Container>
			</Fragment>
		)
	}
}

export default DeckIndex
