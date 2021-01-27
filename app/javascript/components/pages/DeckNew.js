import React, { Component } from 'react'
import TermCard from '../components/TermCard'

export class DeckNew extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				title: '',
				description: '',
				cards: [],
			},
			submitted: false,
		}
	}

	handleTermChange = (e, cardNumber) => {
		const { cards } = this.state.form
		const { form } = this.state
		let currentCards = cards
		let newCards = [...currentCards]
		newCards[cardNumber] = { term: e.target.value, definition: '' }
		let newForm = Object.assign({}, form)
		newForm.cards = newCards
		this.setState({ form: newForm })
	}

	handleDefChange = (e) => {
		console.log('def', e.target.value)
	}

	render() {
		return (
			<div>
				<h1>Create a New Deck</h1>
				<TermCard
					cardNumber={0}
					termChange={this.handleTermChange}
					defChange={this.handleDefChange}
				/>
				<TermCard
					cardNumber={1}
					termChange={this.handleTermChange}
					defChange={this.handleDefChange}
				/>
			</div>
		)
	}
}

export default DeckNew
