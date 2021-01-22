import React, { Component, Fragment } from 'react'

export class DeckShow extends Component {
	render() {
		const { myCards } = this.props
		console.log(myCards)
		return (
			<Fragment>
				{myCards.map((card, index) => {
					return (
						<div className='deck-title-card' >
							<h4>{card.term}</h4>
							<p>{card.definition}</p>
						</div>
					)
				})}
			</Fragment>
		)
	}
}

export default DeckShow
