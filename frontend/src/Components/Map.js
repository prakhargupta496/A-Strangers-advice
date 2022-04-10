import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/auth";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { gql, useQuery } from "@apollo/client";
import RoomIcon from "@material-ui/icons/Room";
import mapboxgl from "mapbox-gl";
import Card from "../Components/Card";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
	require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default; //eslint-disable-line

export default function Map() {
	const { user } = useContext(AuthContext);
	const [newPins, setNewPins] = useState(null);
	const [currentPlaceId, setCurrentPlaceId] = useState(null);
	const [viewport, setViewport] = useState({
		height: "100vh",
		width: "100vw",
		latitude: 26.156794,
		longitude: 91.733611,
		zoom: 12,
	});

	const { data: { getPins: pins } = {} } = useQuery(GET_PINS);
	console.log(newPins);
	console.log(pins);
	useEffect(() => {
		pins && setNewPins(pins);
	}, [pins]);

	const handleMarkerClick = (id, lat, long) => {
		setCurrentPlaceId(id);
		setViewport({ ...viewport, latitude: lat, longitude: long });
	};
	return (
		<div className='map-container'>
			<ReactMapGL
				{...viewport}
				width='100vw'
				height='100vh'
				transitionDuration='35'
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
				onViewportChange={(viewport) => setViewport(viewport)}
				mapStyle='mapbox://styles/arsh-ak7/ckqi1dldb05q217rr6vfq76j3'>
				{newPins &&
					newPins.map((p, index) => (
						<>
							<Marker
								key={index}
								latitude={p.lat}
								longitude={p.long}
								offsetLeft={-viewport.zoom * 3.5}
								offsetTop={-viewport.zoom * 7}>
								<RoomIcon
									style={{
										fontSize: viewport.zoom * 7,
										color:
											p.createdBy === (user === null ? null : user.username)
												? "tomato"
												: "slateblue",
										cursor: "pointer",
									}}
									onClick={() => handleMarkerClick(p.id, p.lat, p.long)}
								/>
							</Marker>
							{p.id === currentPlaceId && (
								<Popup
									className='desc-popup'
									key={Math.random() * index}
									latitude={p.lat}
									longitude={p.long}
									closeButton={true}
									closeOnClick={false}
									onClose={() => setCurrentPlaceId(null)}
									anchor='left'>
									<Card pin={p} setNewPins={setNewPins} />
								</Popup>
							)}
						</>
					))}
			</ReactMapGL>
		</div>
	);
}

const GET_PINS = gql`
	{
		getPins {
			id
			name
			phone
			rating
			desc
			lat
			long
		}
	}
`;
