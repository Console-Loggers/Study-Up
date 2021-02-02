import React, { Component, Fragment } from 'react'
import { Row, FormGroup, Label, Input, Col } from 'reactstrap'

import Button from './Button'

export class VocabCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				term: '',
				definition: '',
			},
			query: '',
		}
	}

	handleChange = e => {
		const { form } = this.state
		form[e.target.name] = e.target.value
		this.setState({ form: form })
	}

	searchSubmit = e => {
		e.preventDefault()
		this.setState({ query: e.target.value })
	}

	render() {
		const { termChange, defChange, cardNumber } = this.props
		return (
			<Fragment>
				<Row>
					<Col md={6}>
						<FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
							<Label className='mr-sm-2'>Term</Label>
							<Input
								type='text'
								name='term'
								placeholder='Enter a Term'
								onChange={e => termChange(e)}
							/>
						</FormGroup>
						<Button
							className='button blue-outline-button sm-button'
							onClick={this.searchSubmit}
						>
							<span>Search</span>
						</Button>
					</Col>
					<Col md={6}>
						<FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
							<Label className='mr-sm-2'>Definition</Label>
							<Input
								type='text'
								name='definition'
								placeholder='Enter a Definition'
								onChange={e => defChange(e, cardNumber)}
							/>
						</FormGroup>
					</Col>
				</Row>
			</Fragment>
		)
	}
}

export default VocabCard
