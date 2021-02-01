import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import Button from '../components/Button'

export class DeckShow extends Component {
	constructor(props) {
		super(props)
		console.log(props)
		this.state = {
			cards: this.props.myCards,
			index: 0,
			isTerm: true,
		}
	}

	// Toggle between "Term" and "Definition"
	onToggle = () => {
		if (this.state.isTerm === true) {
			this.setState({ isTerm: false })
		} else {
			this.setState({ isTerm: true })
		}
	}

	prevClick = () => {
		const { cards, index } = this.state
		let newIndex = index - 1
		let lastIndex = cards.length - 1
		if (index === 0) {
			this.setState({ index: lastIndex })
		} else if (index > 0) {
			this.setState({ index: newIndex })
		}
	}

	nextClick = () => {
		const { cards, index } = this.state
		let newIndex = index + 1
		if (index < cards.length - 1) {
			this.setState({ index: newIndex })
		} else if (index === cards.length - 1) {
			this.setState({ index: 0 })
		}
	}

	render() {
		const { cards, index, isTerm } = this.state
		console.log('state on show page:', this.state)
		return (
			<Fragment>
				<div className='show-card-container show-page'>
					<div className='deck-show-card' onClick={this.onToggle}>
						{ isTerm && (
							<>
								<h4>{cards[index].term}</h4>
							</>
						)}
						{!isTerm && (
							<>
								<p>{cards[index].definition}</p>
							</>
						)}
					</div>
					<div className='arrow-container'>
						<button className='prev-arrow'>
							<FaArrowLeft size={25} onClick={this.prevClick} />
						</button>
						<button className='next-arrow'>
							<FaArrowRight size={25} onClick={this.nextClick} />
						</button>
					</div>
					<Link to='/mydecks'>
						<Button className='button outline-button sm-button'>
							<span>Go Back</span>
						</Button>
					</Link>
				</div>
			</Fragment>
		)
	}
}

export default DeckShow
