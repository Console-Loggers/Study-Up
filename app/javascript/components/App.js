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

import decks from '../mockDecks.js'
import cards from '../mockCards.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			decks: decks,
			cards: cards,
		}
	}

	// componentDidMount() {
	//   this.deckIndex()
	// }

	// deckIndex = () => {

	// }

	createDeck = (newDeck) => {
		console.log(newDeck)
	}

	// updateDeck = (updateDeck, id) => {}

	// deleteDeck = (id) => {}

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
							<Route exact path='/' component={Home} />

							{/* ----- About ----- */}
							<Route path='/about' component={About} />

							{/* ----- Protected Deck Index ----- */}
							<Route
								path='/mydecks'
								render={(props) => {
									const id = this.props.current_user.id
									let myDecks = decks.filter((deck) => deck.user_id === id)
									return <DeckIndex myDecks={myDecks} />
								}}
							/>

							{/* ----- Protected Deck Show ----- */}
							{logged_in && (
								<Route
									path='/mydeck/:id'
									render={(props) => {
										const id = props.match.params.id
										let deck = decks.find((deck) => deck.id === parseInt(id))
										let myCards = cards.filter(
											(card) => card.deck_id === deck.id
										)
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
