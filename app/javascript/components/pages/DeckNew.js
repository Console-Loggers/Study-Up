import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import TermCard from '../components/TermCard'
import Button from '../components/Button'
import { Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'

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

	handleChange = e => {
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
	}

	handleAddCard = () => {
		const { cards } = this.state.form
		let { form } = this.state
		form.cards = [...cards, { term: '', definition: '' }]
		this.setState({ form: form })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.createDeck(this.state.form)
		this.setState({ submitted: true })
	}

	render() {
		const { form } = this.state
		return (
			<Fragment>
				<Container>
					<h1>Create a New Deck</h1>
					<Form>
						<FormGroup>
							<Label>Title</Label>
							<Input
								type='text'
								name='title'
								value={form.title}
								onChange={this.handleChange}
								placeholder='Enter a title for this deck.'
							/>
						</FormGroup>
						<FormGroup>
							<Label>Description</Label>
							<Input
								type='text'
								name='description'
								value={form.description}
								onChange={this.handleChange}
								placeholder='Enter a description for this deck.'
							/>
						</FormGroup>

						{this.state.form.cards.map((card, index) => (
							<TermCard
								key={index}
								cardNumber={index}
								termChange={this.handleTermChange}
								defChange={this.handleDefChange}
								query={this.query}
							/>
						))}

						<div className='add-button-container'>
							<Button
								type='button'
								className='button blue-outline-button sm-button'
								onClick={() => this.handleAddCard()}
							>
								<span>Add a Card</span>
							</Button>
						</div>
					</Form>

					<div className='create-button-container'>
						<Button
							type='submit'
							className='button blue-solid-button'
							onClick={this.handleSubmit}
							name='submit'
						>
							<span>Create Deck</span>
						</Button>
					</div>
				</Container>
				{this.state.submitted && <Redirect to='/mydecks' />}
			</Fragment>
		)
	}
}

export default DeckNew
