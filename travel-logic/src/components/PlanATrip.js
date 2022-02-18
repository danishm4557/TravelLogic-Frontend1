import React, { Component } from 'react'
import Autocomplete from "react-google-autocomplete"
import HotSpots from './HotSpots'




class PlanATrip extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			// placeSelected: props.placeSelected,
			latitude: props.latitude,
			longitude: props.longitude,
			baseUrl: props.baseUrl,
			endOfUrl: props.endOfUrl,
			placesNearby: []
		}
	}






	

	render() {
		console.log(this.state.placesNearby)

		return(
			<>
				
			</>
		)
	}
}

export default PlanATrip

