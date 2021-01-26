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
		const { form } = this.state
		return (
			<div>
				<h1>Create a New Deck</h1>
				<form>
					<label> Title </label>
					<input
						type='text'
						name='title'
						value={form.title}
						onChange={this.handleChange}
						placeholder='Enter a title for this deck.'
					/>

					<label> Description </label>
					<input
						type='text'
						name='description'
						value={form.description}
						onChange={this.handleChange}
						placeholder='Enter a description for this deck.'
					/>
				</form>
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
