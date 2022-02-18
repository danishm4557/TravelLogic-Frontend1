import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

class NavBar extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return(
			<>
				<Navbar className="nav-bar" bg="dark" variant="dark">
					<Container>
					<Navbar.Brand href="#home">Travel Logic</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#trending">Trending</Nav.Link>
						<Nav.Link href="#post">Post</Nav.Link>
						<Nav.Link href="#planATrip">Plan a Trip</Nav.Link>
					</Nav>
					</Container>
				</Navbar>
			</>
		)
	}


}


export default NavBar