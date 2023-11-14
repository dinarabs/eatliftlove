import { useState } from 'react'
import {
	APIProvider,
	Map,
	AdvancedMarker,
	Pin,
	InfoWindow,
} from '@vis.gl/react-google-maps'

const GoogleMap = () => {
	const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
	const mapId = import.meta.env.VITE_MAP_ID
	const position = { lat: 52.52, lng: 13.405 } // Berlin
	const [selectedGymIndex, setSelectedGymIndex] = useState(null)

	const listOfGyms = [
		{
			name: 'Crossfit Mins',
			url: 'http://www.crossfitmins.com/',
			lat: 52.48,
			lng: 13.35,
		},
		{
			name: 'Crossfit Grenzgänger',
			url: 'http://crossfitgrenzganger.com/',
			lat: 52.52,
			lng: 13.38,
		},
		{
			name: 'CrossFit Black Sheep',
			url: 'http://crossfitsheeppack.de/',
			lat: 52.49,
			lng: 13.38,
		},
		{
			name: 'CrossFit Berlin - Icke',
			url: 'https://www.crossfiticke.com/',
			lat: 52.48,
			lng: 13.36,
		},
		{
			name: 'CrossFit Aorta',
			url: 'http://www.crossfitaorta.com/',
			lat: 52.47,
			lng: 13.37,
		}, //52.47304271849128, 13.371742192505165
		{
			name: 'SPREE CROSSFIT',
			url: 'http://www.spreecrossfit.de/',
			lat: 52.5,
			lng: 13.4,
		}, //52.505784987731396, 13.406261086421805
		{
			name: 'CrossFit Mitte',
			url: 'http://www.crossfitmitte.de/',
			lat: 52.53,
			lng: 13.36,
		}, //52.53291944101249, 13.3674996502157
	]

	return (
		<APIProvider apiKey={apiKey}>
			<div style={{ height: '500px', width: '800px' }}>
				<Map zoom={12} center={position} mapId={mapId}>
					{listOfGyms.map((gym, index) => (
						<AdvancedMarker
							key={index}
							position={gym}
							onClick={() => setSelectedGymIndex(index)}
						>
							{' '}
							<Pin
								background={'purple'}
								borderColor={'black'}
								glyphColor={'white'}
							/>
							{selectedGymIndex === index && (
								<InfoWindow
									position={gym}
									onCloseClick={() => setSelectedGymIndex(null)}
								>
									<a href={gym.url} target="_blank" rel="noopener noreferrer">
										<p style={{ color: 'black', fontWeight: '500' }}>
											{gym.name}
										</p>
									</a>
								</InfoWindow>
							)}
						</AdvancedMarker>
					))}
				</Map>
			</div>
		</APIProvider>
	)
}

export default GoogleMap
