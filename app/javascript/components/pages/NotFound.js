import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'reactstrap'
import Button from '../components/Button'
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
      				>
        <Link to='/'>
          <Button className='button outline-button sm-button'>
            <span>Go Back</span>
          </Button>
        </Link>
      </Jumbotron>
			</Fragment>
		)
	}
}

export default NotFound
