import React, { Component } from "react";
import HomePageMap from "./HomePageMap";
import NavBar from "./NavBar";
import Video from "../../src/public/media/pexels-pat-whelen-5736027.mp4";
import Autocomplete from "react-google-autocomplete";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotSpots from "./HotSpots";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // baseUrl: 'https://www.triposo.com/api/20220104/local_highlights.json?',
      baseUrl: "https://www.triposo.com/api/20220104/day_planner.json?",
      placesNearby: [],
      placeExists: false,
      placeSelected: null,
      cityName: "",
      startDate: null,
      endDate: null,
      latitude: null,
      longitude: null,
      // endOfUrl: '&fields=poi:id,name,coordinates,snippet',
      days: [],
      date: "",
      places: [],
      items: null,
      itinerary_items: [],
    };
  }

  // localUrl = 'http://localhost:8000/'
  localUrl = process.env.REACT_APP_BASEURL;

  // getPlaces = (e) => {
  // 	e.preventDefault()
  // 	fetch(this.state.baseUrl + `latitude=${this.state.latitude}&` + `longitude=${this.state.longitude}` + this.state.endOfUrl, {
  // 		headers: {
  // 			"X-Triposo-Account": process.env.REACT_APP_X_TRIPOSO_ACCOUNT,
  // 			"X-Triposo-Token": process.env.REACT_APP_X_TRIPOSO_TOKEN
  // 		}
  // 	}).then(res => {
  // 		if (res.status === 200) {
  // 			return res.json()
  // 		} else {
  // 			return []
  // 		}
  // 	}).then(data => {
  // 		this.setState({
  // 			placesNearby: data
  // 		})
  // 	})
  // }

  handleSubmit = (data) => {
    // json.preventDefault()
    // Make list of objects (initialize an empty list)

    // Loop through the json
    // Create an object with attributes that are on PlaceModel from the json that i'm loopin through.
    // Push the object to the array
    //
    // console.log(data.results[0])
    {
      data.results[0].days.map(
        (day) => (
          (this.state.items = {
            date: day.date,
            itinerary_items: day.itinerary_items,
          }),
          this.state.places.push(this.state.items)
        )
      );
      console.log(this.state.places);
    }

    fetch(this.localUrl, {
      method: "POST",
      body: JSON.stringify({
        // place: send the whole array back.. this.state.placesArray
        // date: this.state.date,
        places: this.state.places,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      return res.json();
    });

    fetch(this.localUrl)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        this.setState({
          places: data[data.length - 1],
        });
        console.log(this.state.places);
      });
    // Update the backend route (route this.localURL + home) to return the created places with IDs.
    // console.log(result: what comes back from the backend.)
    // Save those objects from the backend State (RENDER THESE INSTEAD OF STRAIGHT FROM THE API)
  };

  getPlaces = (e) => {
    e.preventDefault();
    fetch(
      this.state.baseUrl +
        `location_id=${this.state.cityName}&` +
        `start_date=${this.state.startDate}&` +
        `end_date=${this.state.endDate}`,
      {
        headers: {
          "X-Triposo-Account": process.env.REACT_APP_X_TRIPOSO_ACCOUNT,
          "X-Triposo-Token": process.env.REACT_APP_X_TRIPOSO_TOKEN,
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        this.setState({
          placesNearby: data.results[0],
          placeExists: true,
          days: data.results[0].days,
        });
        this.handleSubmit(data);
      });
    // .then(json => {
    // 	this.handleSubmit(json)
    // })
  };

  startDateChange = (event) => {
    console.log(event.target.value);
    this.setState({
      startDate: event.target.value,
    });
  };

  endDateChange = (event) => {
    console.log(event.target.value);
    this.setState({
      endDate: event.target.value,
    });
  };

  handleDelete = (id) => {
    // e.preventDefault()
    console.log(id);
    fetch(this.localUrl + "/" + id, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.setState({
          placesNearby: [],
          placeExists: false,
          placeSelected: null,
          cityName: "",
          // startDate: null,
          // endDate: null,
          latitude: null,
          longitude: null,
          days: [],
          date: "",
          places: [],
          items: null,
          itinerary_items: [],
        });
        window.location.replace(`/#nav-bar}`);
      }
    });
  };

  // handleSubmit = (event) => {
  // 	event.preventDefault()
  // 	console.log(this.state);
  // 	fetch(baseUrl + '/chew', {
  // 	  method: 'POST',
  // 	  body: JSON.stringify( {
  // 		name: this.state.name,
  // 		guests: this.state.guests}),
  // 	  headers: {
  // 		'Content-Type': 'application/json'
  // 	  },
  // 	}).then(res => { console.log(res); return res.json()} )
  // 	.then(json => {
  // 	  this.getReservations(json)
  // 	})
  // 	.then(
  // 	  this.setState({
  // 	  name: '',
  // 	  guests: ''
  // 	}))
  //   }

  render() {
    console.log(this.state.places);
    // console.log(this.state.days)

    return (
      <>
        <NavBar className="navBar" />
        <div className="my-video">
          <video src={Video} type="mp4" autoPlay="autoPlay" loop="loop" muted />
        </div>
        <h1 className="plan-a-trip">PLAN A TRIP</h1>
        <div>
          <form onSubmit={this.getPlaces} className="search-form">
            <Autocomplete
              className="going-to-input"
              name="going-to"
              placeholder="📍 Going to"
              apiKey={process.env.REACT_APP_GOOGLE_APIKEY}
              onPlaceSelected={(place) => {
                // console.log(place)
                this.state.placeSelected = place;
                console.log(this.state.placeSelected);
                this.state.latitude = place.geometry.location.lat();
                this.state.longitude = place.geometry.location.lng();
                // this.state.cityName = place.address_components[0].long_name
                this.state.cityName =
                  place.address_components[0].long_name.reclearplace(" ", "_");
                console.log(this.state.cityName);
                console.log(`Latitude: ${this.state.latitude}`);
                console.log(`Longitude: ${this.state.longitude}`);
              }}
            />
            <label className="start-date-label">Start Date</label>
            <input
              className="date-input"
              name="startDate"
              type="date"
              onChange={(event) => this.startDateChange(event)}
            />
            <label className="end-date-label">End Date</label>
            <input
              className="date-input"
              name="endDate"
              type="date"
              onChange={(event) => this.endDateChange(event)}
            />
            <div onClick={() => window.location.replace("/#map-container")}>
              <input
                className="submit-input"
                name="search-button"
                type="submit"
                value="Search"
              />
            </div>
          </form>
        </div>
        <HotSpots
          placeExists={this.state.placeExists}
          days={this.state.days}
          placesNearby={this.state.placesNearby}
          places={this.state.places}
        />
        <HomePageMap
          placeExists={this.state.placeExists}
          places={this.state.places}
          placesNearby={this.state.placesNearby}
        />
        {this.state.placeExists ? (
          <input
            type="button"
            value="DELETE PLAN AND RESTART"
            onClick={(e) => this.handleDelete(this.state.places._id)}
            className="remove-button"
            style={{ backgroundColor: "red", color: "white" }}
          />
        ) : (
          ""
        )}
        <ScrollToTop smooth />
      </>
    );
  }
}

export default HomePage;
