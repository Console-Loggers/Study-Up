import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import TermCard from '../components/TermCard'
import Button from '../components/Button'

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

	handleChange = (e) => {
		let { form } = this.state
		form[e.target.name] = e.target.value
		this.setState({ form: form })
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

	handleAddCard = () => {
		const { cards } = this.state.form
		let { form } = this.state
		form.cards = [...cards, { term: '', definition: '' }]
		this.setState({ form: form })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('handlesubmit clicked')
		this.props.createDeck(this.state.form)
		console.log('handlesubmit', this.state.form)
		this.setState({ submitted: true })
	}

	render() {
		const { form } = this.state
		console.log(form)
		return (
			<Fragment>
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
				<Button
					className='button outline-button'
					onClick={() => this.handleAddCard()}
				>
					Add a Card
				</Button>
				<Button
					className='button outline-button'
					onClick={this.handleSubmit}
					name='submit'
				>
					Create Deck
				</Button>
				{this.state.submitted && <Redirect to='/mydecks' />}
			</Fragment>
		)
	}
}

export default DeckNew
