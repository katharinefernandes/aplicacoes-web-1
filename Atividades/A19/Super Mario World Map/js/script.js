var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDAiT1dDJeqC1amO4GYYd3NLV1lWSIaqk&map_ids=dbff0e43f8cde12e&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
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

	// Nome
	// Latitude, Longitude
	// URL da imagem
	// Tamanho
	const markers = [
		[
			"Yoshi's House",
			34.66669734177897,
			135.4309054875526,
			'assets/yoshi_house.svg',
			38,
			31,
		],
		[
			'You Are Here',
			34.66767112713121,
			135.4297887322531,
			'assets/pointer.svg',
			30,
			47.8,
		],
		[
			'Ghost House',
			34.66832715150856,
			135.43292762674864,
			'assets/ghosthouse.svg',
			40,
			48,
		],
		['Castle', 34.66775608022106, 135.43139547897843, 'assets/castle.svg', 40, 53],
		['Warp Pipe', 34.66739738878135, 135.43225049775214, 'assets/pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, 'assets/star.svg', 38, 38],
		[
			'Donut Plains',
			34.66830355359945,
			135.4320565322381,
			'assets/hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			34.66829411443392,
			135.43231361996433,
			'assets/hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			34.6683781779677,
			135.43217016043528,
			'assets/hill_with_eyes.svg',
			50,
			60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}

document.head.appendChild(script);