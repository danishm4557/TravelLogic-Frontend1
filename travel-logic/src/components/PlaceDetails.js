import React, { Component } from 'react'



class PlaceDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			placeExists: props.placeExists,
			dateSelected: props.dateSelected,
			dayPlan: props.dayPlan,
			places: props.places
		}
	}

	// localUrl = 'http://localhost:8000/'

	// getDayPlan = () => {
	// 	fetch(this.localUrl + this.props.dateSelected)
	// 	.then(res => {
	// 	  if(res.status === 200) {
	// 		return res.json()
	// 	  } else {
	// 		return []
	// 	  }
	// 	}).then(data => {
	// 	  this.setState({dayPlan: data})
	// 	})
	//   }




	render() {
		return (

			<>
			{ this.props.placeExists 
				? <div className="place-detail">
					{this.state.places.map((day) => (
							<div key={day.date}>
								<h2 className="day-date" id={day.date}>{day.date}</h2>
								{day.itinerary_items.map((plan) => (
									<div key={plan.poi.id}>
										<h5 className="plan-title">{plan.title}</h5>
										<div>
											<h5><strong>{plan.poi.name}</strong></h5>
											{/* { plan.poi.images[0].sizes.thumbnail.url
											? <div>
											<img src={plan.images[0].sizes.thumbnail.url} width="30vw" alt="Image"/>
											</div>
											: ''
											} */}
											{/* <img src={plan.images[0].sizes.thumbnail.url} width="30vw" alt="Image"/> */}
											<p>{plan.description}</p>
										</div>
										<input type="submit" value="Remove from Plan" className="remove-button"
										style={{backgroundColor: 'red', color: 'white'}}/>
									</div>
								))}
							</div>
						))}
				</div>
				: ''
			}
			</>

		)
	}




}


export default PlaceDetails