import React, { Component, Fragment } from 'react'

export class DeckShow extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cards: this.props.myCards,
			index: 0,
			isTerm: false,
		}
	}

	onClick = () => {
		if (this.state.class === 'term') {
			this.setState({ class: 'definition' })
		} else {
			this.setState({ class: 'term' })
		}
	}

	render() {
		const { cards, index, isTerm } = this.state
		console.log('state on show page:', this.state)
		return (
			<Fragment>
				<div className='deck-title-card'>
					{isTerm && (
						<>
							<h4>{cards[index].term}</h4>
						</>
					)}
					{!isTerm && (
						<>
							<p>{cards[index].definition}</p>
						</>
					)}
				</div>
			</Fragment>
		)
	}
}

export default DeckShow
