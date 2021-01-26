import React, { Component } from 'react'
import TermCard from '../components/TermCard'

export class DeckNew extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				title: '',
				description: '',
				cards: [
					{
						term: '',
						definition: '',
					},
					{
						term: '',
						definition: '',
					},
					{
						term: '',
						definition: '',
					},
				],
			},
			submitted: false,
		}
	}

	handleTermChange = (e, cardNumber) => {
		const { cards } = this.state.form
		let { form } = this.state
		let currentCards = cards
		let newCards = [...currentCards]
		newCards[cardNumber] = { term: e.target.value, definition: '' }
		form.cards = newCards
		this.setState({ form: form })
	}

	handleDefChange = (e, cardNumber) => {
		const { cards } = this.state.form
		let { form } = this.state
		let currentCards = cards
		let newCards = [...currentCards]
		const thisCard = cards[cardNumber]
		newCards[cardNumber] = { ...thisCard, definition: e.target.value }
		form.cards = newCards
		this.setState({ form: form })
		console.log('def', form)
	}

	render() {
		return (
			<div>
				<h1>Create a New Deck</h1>
				{/* <TermCard
					cardNumber={0}
					termChange={this.handleTermChange}
					defChange={this.handleDefChange}
				/>
				<TermCard
					cardNumber={1}
					termChange={this.handleTermChange}
					defChange={this.handleDefChange}
				/> */}
				{this.state.form.cards.map((card, index) => (
					<TermCard
						key={index}
						cardNumber={index}
						termChange={this.handleTermChange}
						defChange={this.handleDefChange}
					/>
				))}
			</div>
		)
	}
}

export default DeckNew
