var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDAiT1dDJeqC1amO4GYYd3NLV1lWSIaqk&map_ids=dbff0e43f8cde12e&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
function initMap() {
		axios.get(script)
		.then(response => {
			map = new google.maps.Map(response.document.getElementById('map'), {
				center: {
					lat: 34.66767774804736,
					lng: 135.43076145097373,
				},
				zoom: 18,
				mapId: 'dbff0e43f8cde12e',
				mapTypeControl: false,
				fullscreenControl: false,
				streetViewControl: false
			});
		})
		.catch(error => console.log(error));
	}

	document.head.appendChild(script);
