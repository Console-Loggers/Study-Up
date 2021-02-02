import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import TermCard from '../components/TermCard'
import Button from '../components/Button'
import { Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'

export class DeckNewVocab extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				title: '',
				description: '',
				cards: [],
			},
			query: '',
			definition: '',
			submitted: false,
		}
	}

	handleChange = e => {
		let { form } = this.state
		form[e.target.name] = e.target.value
		this.setState({ form: form })
	}

	handleTermChange = (e, cardNumber) => {
		console.log(e.target.value)
		this.setState({ query: e.target.value })
	}

	// handleTermChange = (e, cardNumber) => {
	// 	const { query } = this.state.form
	// 	let { form } = this.state
	// 	let currentCards = cards
	// 	let newCards = [...currentCards]
	// 	newCards[cardNumber] = { term: e.target.value, definition: '' }
	// 	form.cards = newCards
	// 	this.setState({ form: form })
	// }

	// setDefinitionCard = (meaning, cardNumber) => {
	// 	const { cards } = this.state.form
	// 	let { form } = this.state
	// 	let currentCards = cards
	// 	let newCards = [...currentCards]
	// 	const thisCard = cards[cardNumber]
	// 	newCards[cardNumber] = { ...thisCard, definition: meaning }
	// 	form.cards = newCards
	// 	this.setState({ form: form })
	// }

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

	getDefinition = () => {
		const { query, definition } = this.state
		console.log(this.state)
		const api = `https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${query}`
		fetch(api, {
			headers: {
				'x-rapidapi-key': process.env.REACT_APP_API_KEY,
				'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
			},
			method: 'GET',
		})
			.then(response => {
				console.log(response)
				return response.json()
			})
			.then(payload => {
				console.log('payload:', payload)
				this.setState({ definition: payload.meaning })
			})
			.catch(err => {
				console.error(err)
			})
	}

	render() {
		const { form } = this.state
		// console.log(form)
		return (
			<Fragment>
				<Container>
					<h1>Create a Vocab Deck</h1>

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
							<>
							<TermCard
								key={index}
								cardNumber={index}
								termChange={this.getDefinition}
								defChange={this.handleDefChange}
							/>
							<Button className='button blue-outline-button sm-button'>
								<span>Search</span>
							</Button>
							</>
						))}

						{/* <FormGroup>
							<Label>Term</Label>
							<Input
								type='text'
								name='query'
								value={form.query}
								onChange={this.handleChange}
								placeholder='Enter a vocab word for this card.'
							/> */}

						{/* </FormGroup> */}

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

export default DeckNewVocab
