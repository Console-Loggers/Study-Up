import React, { Component, Fragment } from 'react'

export class DeckShow extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cards: this.props.myCards,
			class: 'term',
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
		const { myCards } = this.props
		console.log('state on show page:', this.state)
		return (
			<Fragment>
				return (
				<div className='deck-title-card'>
					<h4>{card.term}</h4>
					<p>{card.definition}</p>
				</div>
				)
			</Fragment>
		)
	}
}

export default DeckShow
