import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Container } from 'reactstrap'
import Button from '../components/Button'

class Dictionary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				query: '',
			},
			definition: '',
		}
	}

	handleSubmit = e => {
		e.preventDefault()
		this.getDefinition()
	}

	handleChange = e => {
		const { form } = this.state
		console.log(e.target.value)
		form[e.target.name] = e.target.value
		// console.log('word', word)
		this.setState({ form: form })
		console.log(this.state)
	}

	getDefinition = () => {
		const { form, definition } = this.state
		const api = `https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${form.query}`
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
				console.log(definition)
			})
			.catch(err => {
				console.error(err)
			})
	}

	render() {
		return (
			<Container>
				<h1>Dictionary</h1>
				<Form>
					<FormGroup>
						<Label>Enter a word</Label>
						<Input
							type='text'
							name='query'
							placeholder='Enter Word'
							value={this.state.query}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<Button
						className='button sm-button blue-solid-button'
						type='submit'
						onClick={this.handleSubmit}
					>
						<span>Search</span>
					</Button>
				</Form>
				<div className='definition-container'>
					<p>{this.state.definition.noun}</p>
					<p>{this.state.definition.verb}</p>
					<p>{this.state.definition.adverb}</p>
					<p>{this.state.definition.adjective}</p>
				</div>
			</Container>
		)
	}
}

export default Dictionary
