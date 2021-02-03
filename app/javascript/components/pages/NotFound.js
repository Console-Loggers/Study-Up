import React, { Component, Fragment } from 'react'
import { Jumbotron } from 'reactstrap'
import bgImage from '../../../assets/images/404pageSU.jpg'

export class NotFound extends Component {
	render() {
		return (
			<Fragment>
				<Jumbotron
					className='jumbo-img'
					style={{
						backgroundImage: `url(${bgImage})`,
					}}
				></Jumbotron>
			</Fragment>
		)
	}
}

export default NotFound
