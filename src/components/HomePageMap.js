import React, { useRef, useEffect, useState } from 'react'
// import mapboxgl, { Marker } from 'mapbox-gl'
import mapboxgl, { Marker } from 'mapbox-gl'
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker'

function HomePageMap(props) {
	// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker'

	const places = props.places;

	const mapContainer = useRef(null);
	const map = useRef(null);
	const Marker = useRef()
	// const marker = new mapboxgl.Marker({
	// 	width: '5rem',
	// 	height: '5rem',
	// 	color: "#FFFFFF",
	// 	draggable: false
	// })
	const [lng, setLng] = useState(-87.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(1);
	// Set marker options.



	// if (props.placeExists) {
	// 	const newLng = props.placesNearby.location.coordinates.longitude
	// 	const newLat = props.placesNearby.location.coordinates.latitude
	// 	setLng(newLng)
	// 	setLat(newLat)
	// 	const map = new mapboxgl.Map({
	// 		container: mapContainer.current,
	// 		style: 'mapbox://styles/mapbox/streets-v11',
	// 		center: [lng, lat],
	// 		zoom: 7
	// 	}) 
	// }


	// const longSet = () => setLng(props.placesNearby.location.coordinates.longitude)
	// const latSet = () => setLat(props.placesNearby.location.coordinates.latitude)
	


	useEffect(() => {
			// if (map.current) return; // initialize map only once
			// mapboxgl.workerClass = MapboxWorker
			const map = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [lng, lat],
				zoom: 2,
				height: '90vh'
			});
			// console.log("Places", props.placeExists)
			// console.log(`This is map`, map);
			// console.log('Something', props.places);
			// if (props.places.length && props.places.places.length) {
			if (props.placeExists) {
				
				// setLng(lng => ({...lng, lng: props.placesNearby.location.coordinates.longitude}))
				map.remove()
				const map1 = new mapboxgl.Map({
					container: mapContainer.current,
					style: 'mapbox://styles/mapbox/streets-v11',
					center: [props.placesNearby.location.coordinates.longitude, props.placesNearby.location.coordinates.latitude],
					zoom: 12,
					height: '90vh'
				})

				props.places.map(day => {
					// console.log(day);
					day.itinerary_items.map(plan => (
						// console.log(plan.poi.coordinates.longitude),
						window.marker = new mapboxgl.Marker({
							width: '5rem',
							height: '5rem',
							color: "Red",
							draggable: false
						})
							.setLngLat([plan.poi.coordinates.longitude, plan.poi.coordinates.latitude])
							.addTo(map1)
							// this.map.center = [props.placesNearby.location.coordinates.longitude, props.placesNearby.location.coordinates.latitude]
					))
				})
			}


			// window.marker = new mapboxgl.Marker({
			// 	width: '5rem',
			// 	height: '5rem',
			// 	color: "#FFFFFF",
			// 	draggable: false
			// 	})
			// .setLngLat([-87.5,41.5])
			// .addTo(map);
		}, [props.placeExists]);


		// new mapboxgl.Marker(
		// 	<div
		// 	  style={{
		// 		width: '5rem',
		// 		height: '5rem',
		// 		borderRadius: '50%',
		// 		cursor: 'pointer',
		// 	  }} />
		//   )
		// 	.setLngLat([42.5, 87.5])
		// 	.addTo(mapContainer);





		return (
			<div>
				<div ref={mapContainer} className="map-container" id="map-container" />
				{/* {places.map(day => (
				day.itinerary_items.map(plan => (
					<Marker key={plan.poi.id} latitude={plan.poi.coordinates.latitude} longitude={plan.poi.coordinates.longitude}>
						<div>Place</div>
					</Marker>
				))
			))} */}
				{/* <div>
			{places.map(day => (
				day.itinerary_items.map(plan => (
					<div key={plan.poi.id}>
						<div>Marker.setLngLat([{plan.poi.coordinates.longitude},{plan.poi.coordinates.latitude}]).addTo(map)</div>
					</div>
				))
			))} */}
				{/* </div> */}
				{/* <Marker longitude={-100} latitude={40} anchor="bottom" >
				<h1>Marker</h1>
			</Marker> */}
			</div>
		)

	}

	export default HomePageMap