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
											{/* { plan.poi.images[0].source_id
											? <div>
											<img src={plan.images[0].sizes.thumbnail.url} width="30vw" alt="Image"/>
											</div>
											: ''													// Trying to import image for each Plan but not working.
											} */}
											{/* <img src={plan.images[0].sizes.thumbnail.url} width="30vw" alt="Image"/> */}
											
												{/* <img src={plan.poi.images[0].sizes.medium.url} alt="image" /> */}
											
											<p>{plan.description}</p>
										</div>
										{/* <div className="edit-and-remove-buttons-div">
											<input type="button" value="Remove from Plan" onClick={({plan}) => this.handleDelete({plan})} className="remove-button"
											style={{backgroundColor: 'red', color: 'white'}} />
											<input type="submit" value="Edit" className="edit-button"
											style={{backgroundColor: 'white', color: 'black'}}/>
										</div>									 */}
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