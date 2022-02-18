import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
import {Navbar, Container, Nav} from 'react-bootstrap'
import PlaceDetails from './PlaceDetails';



class HotSpots extends Component {
	constructor(props) {
		super(props)

		this.state = {
			placesNearby: props.placesNearby,
			// locationName: props.placesNearby.location.name,
			placeExists: props.placeExists,
			days: props.days,
			dateSelected: '',
			dayPlan: [],
			places: props.places
		}
	}

	localUrl = 'http://localhost:8000/'


	viewDateSelected = (e) => {
		e.preventDefault()
		console.log(e.target.id)
		this.setState({
			dateSelected: e.target.id
		})

		// fetch(this.localUrl + this.props.places._id + '/' + this.state.dateSelected)
		// .then(res => {
		//   if(res.status === 200) {
		// 	return res.json()
		//   } else {
		// 	return []
		//   }
		// }).then(data => {
		//   this.setState({dayPlan: data})
		// })
	}
	




	render() {
		// console.log(this.state.placesNearby);
		return(
			<>
				{ this.props.placeExists 
					? <div className="trip-title">
						<img className="trip-title-img" src={this.props.placesNearby.location.images[0].sizes.medium.url} style={{opacity: '1.5'}}/>
						<div className="trip-title-city-name">
							<div>

									<h1>{this.props.placesNearby.location.name}</h1>
									{/* <h5>{this.props.placesNearby.days[0].date} - {this.props.placesNearby.days[this.props.placesNearby.days.length-1].date}</h5> */}

							</div>
						</div>
						<Navbar className="days-nav-bar" bg="dark" variant="dark">
						<Container>
						<Nav>
							{ this.props.days.map((days) => (
								<Nav.Link key={days.date} id={days.date} onClick={() => window.location.replace(`/#${days.date}`)}>{days.date}</Nav.Link>
							)) }	
						</Nav>
						</Container>
					</Navbar>
					<PlaceDetails dateSelected={this.state.dateSelected} placeExists={this.props.placeExists} 
					 dayPlan={this.state.dayPlan} places={this.props.places}/>
					</div>
					
					
					: ''
				}
			</>
		)
	}



}





export default HotSpots
