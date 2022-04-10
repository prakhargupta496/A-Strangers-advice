import React from "react";
import Rating from "@material-ui/lab/Rating";
import "../CSS/card.css";

export default function Card({ pin }) {
	return (
		<div className='card-container'>
			<div className='card-wrapper'>
				<h3 className='card-title'>{pin.name}</h3>
				<div className='card-desc'>
					<span className='card-para'>{pin.desc}</span>
					<Rating value={pin.rating} readOnly className='card-rating' />
					<span className='card-date'>{pin.phone}</span>
				</div>
			</div>
		</div>
	);
}
