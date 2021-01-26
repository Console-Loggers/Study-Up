import React, { Component, Fragment } from 'react'

export class TermCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				term: '',
				definition: '',
			},
		}
	}

	handleChange = (e) => {
		const { form } = this.state
		form[e.target.name] = e.target.value
		this.setState({ form: form })
	}

	render() {
		const { termChange, defChange, cardNumber } = this.props
		return (
			<Fragment>
				<div className='term-card'>
					<form>
						<label>Term</label>
						<input
							type='text'
							name='term'
							placeholder='Enter a Term'
							onChange={(e) => termChange(e, cardNumber)}
						/>
						<label>Definition</label>
						<input
							type='text'
							name='definition'
							placeholder='Enter a Definition'
							onChange={(e) => defChange(e, cardNumber)}
						/>
					</form>
				</div>
			</Fragment>
		)
	}
}

export default TermCard
