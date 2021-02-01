import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import DeckIndex from './pages/DeckIndex'
import DeckNew from './pages/DeckNew'
import DeckShow from './pages/DeckShow'
import Header from './components/Header'
import Footer from './components/Footer'

// import decks from "../mockDecks.js"
// import cards from "../mockCards.js"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			decks: [],
		}
	}

	componentDidMount() {
		this.deckIndex()
	}

	deckIndex = () => {
		fetch('/decks')
			.then((response) => {
				return response.json()
			})
			.then((decks) => {
				this.setState({ decks: decks })
			})
			.catch((error) => {
				console.log('index errors:', error)
			})
	}

	createDeck = (newDeck) => {
		console.log('newDeck:', newDeck)
		let userId = this.props.current_user.id
		newDeck.user_id = userId
		newDeck.cards_attributes = newDeck.cards.filter(card => card.term !== '' && card.definition !== '' )
		fetch('/decks', {
			body: JSON.stringify(newDeck),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
			.then((response) => {
				console.log('create deck response:', response)
				if (response.status === 422) {
					alert('Please Check Submission.')
				}

				return response.json()
			})
			.then((payload) => {
				newDeck.cards.forEach((card) => {
					this.createCard(card, payload.id)
				})
				this.deckIndex()
				console.log('payload:', payload)
			})
			.catch((errors) => {
				console.log('create errors', errors)
			})
	}
	createCard = (newCard, deckId) => {
		newCard.deck_id = deckId
		fetch('/cards', {
			body: JSON.stringify(newCard),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
			.then((response) => {
				console.log('create card response:', response)
				if (response.status === 422) {
					alert('Please Check Submission.')
				}
				return response.json()
			})
			.then((payload) => {
				console.log('payload')
			})
	}

	// updateDeck = (updateDeck, id) => {}

	deleteDeck = (id) => {
		return fetch(`/decks/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
		})
			.then((response) => {
				return response.json()
			})
			.then(() => {
				this.deckIndex()
			})
			.catch((errors) => {
				console.log('delete errors:', errors)
			})
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
			.then((response) => {
				console.log(response)
				return response.json()
			})
			.then((payload) => {
				console.log(payload)
				this.setState({ definition: payload.value })
				console.log(definition)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	render() {
		// console.log('decks in state', this.state)

		const {
			logged_in,
			current_user,
			sign_in_route,
			sign_out_route,
		} = this.props

		const { decks, cards } = this.state

		return (
			<Fragment>
				<div className='app'>
					<Header
						loggedIn={logged_in}
						signIn={sign_in_route}
						signOut={sign_out_route}
					/>

					<Router>
						<Switch>
							{/* ----- Home ----- */}
							{/* {!logged_in &&  />} */}
							<Route exact path='/' component={Home} />

							{/* ----- About ----- */}
							<Route path='/about' component={About} />

							{/* ----- Protected Deck Index ----- */}
							{logged_in && (
								<Route
									path='/mydecks'
									render={(props) => {
										return (
											<DeckIndex decks={decks} deleteDeck={this.deleteDeck} />
										)
									}}
								/>
							)}

							{/* ----- Protected Deck Show ----- */}
							{logged_in && (
								<Route
									path='/mydeck/:id'
									render={(props) => {
										console.log(props)
										const id = props.match.params.id
										let deck = decks.find((deck) => deck.id === parseInt(id))
										if (!deck) {
											return <h6>Loading...</h6>
										}
										let myCards = deck.cards
										console.log('app js show route', myCards)
										return decks.length > 0 && <DeckShow myCards={myCards} />
									}}
								/>
							)}

							{/* ----- Protected Deck New ----- */}
							<Route
								path='/decknew'
								render={(props) => {
									return (
										<DeckNew
											createDeck={this.createDeck}
											current_user={current_user}
										/>
									)
								}}
							/>

							{/* ----- Protected Deck Edit ----- */}
							{/* <Route path='/deckedit/:id' component={DeckEdit} /> */}

							{/* ----- Not Found ----- */}
							<Route component={NotFound} />
						</Switch>
					</Router>
					<Footer />
				</div>
			</Fragment>
		)
	}
}

export default App
