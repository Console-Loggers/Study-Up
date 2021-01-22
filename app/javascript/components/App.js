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

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			decks: decks,
		}
	}

	// componentDidMount() {
	//   this.deckIndex()
	// }

	// deckIndex = () => {

	// }

	// createDeck = (newDeck) => {
	//   console.log(newDeck);
	// }

	// updateDeck = (updateDeck, id) => {}

	// deleteDeck = (id) => {}

	render() {
		console.log('decks in state', this.state)

		const {
			logged_in,
			current_user,
			sign_in_route,
			sign_out_route,
		} = this.props

		// const {decks} = this.state

		return (
			<Fragment>
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
						<Route
							path='/mydecks/:id'
							render={(props) => {
								const id = props.match.params.id
								let deck = decks.find((deck) => deck.id === parseInt(id))
								return decks.length > 0 && <DeckShow deck={deck} />
							}}
						/>

						{/* ----- Protected Deck New ----- */}
						<Route path='/decknew' component={DeckNew} />

						{/* ----- Protected Deck Edit ----- */}
						{/* <Route path='/deckedit/:id' component={DeckEdit} /> */}

						{/* ----- Not Found ----- */}
						<Route component={NotFound} />
					</Switch>
				</Router>
				<Footer />
			</Fragment>
		)
	}
}

export default App
