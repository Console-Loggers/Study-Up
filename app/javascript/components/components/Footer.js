import React, { Component, Fragment } from 'react'

import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaLinkedin,
	FaGithubSquare,
} from 'react-icons/fa'

export class Footer extends Component {
	render() {
		return (
			<Fragment>
				<footer className='footer-distributed'>
					<div className='footer-right'>
						<a href='https://www.facebook.com' target='_blank'>
							<FaFacebookSquare size={40} />
						</a>
						<a href='https://www.twitter.com' target='_blank'>
							<FaTwitterSquare size={40} />
						</a>
						<a href='https://www.linkedin.com' target='_blank'>
							<FaLinkedin size={40} />
						</a>
						<a
							href='https://github.com/Console-Loggers/Study-Up'
							target='_blank'
						>
							<FaGithubSquare size={40} />
						</a>
					</div>
					<div className='footer-left'>
						<p className='footer-links'>
							<a href='/' className='link-1'>
								Home
							</a>
							<a href='/about'>About Us</a>
						</p>

						<p>Study Up &#169; 2021</p>
					</div>
				</footer>
			</Fragment>
		)
	}
}

export default Footer
