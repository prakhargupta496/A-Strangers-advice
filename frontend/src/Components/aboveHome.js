import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Above() {
	const [showBtns, setShowBtns] = useState(false);
	return (
		<React.Fragment>
			<div className='above'>
				<h1 className='above_h1'>A STRANGER'S ADVICE</h1>
				<p className='above_p'>Made by students for students</p>
				{console.log(showBtns)}
				{!showBtns ? (
					<div className='button'>
						<button onClick={() => setShowBtns(!showBtns)} className='join-btn'>
							Join our study groups
						</button>
					</div>
				) : (
					<div className='button'>
						<Link
							data-room='privateRoom'
							data-toggle='modal'
							data-target='#registration-modal'
							data-section='hero'
							data-type='individual'
							to='/chatroom'
							className='but_link'>
							<h2 className='c-hero__btn-title four-btns one'>Maths</h2>
						</Link>
						<Link
							data-room='privateRoom'
							data-toggle='modal'
							data-target='#registration-modal'
							data-section='hero'
							data-type='individual'
							to='/chatroom'
							className='but_link red'>
							<h2 className='c-hero__btn-title four-btns one'>Science</h2>
						</Link>
						<Link
							data-room='privateRoom'
							data-toggle='modal'
							data-target='#registration-modal'
							data-section='hero'
							data-type='individual'
							to='/chatroom'
							className='but_link blue'>
							<h2 className='c-hero__btn-title four-btns one'>English</h2>
						</Link>
						<Link
							data-room='privateRoom'
							data-toggle='modal'
							data-target='#registration-modal'
							data-section='hero'
							data-type='individual'
							to='/chatroom'
							className='but_link orange'>
							<h2 className='c-hero__btn-title four-btns one'>History</h2>
						</Link>
						<Link
							data-room='privateRoom'
							data-toggle='modal'
							data-target='#registration-modal'
							data-section='hero'
							data-type='individual'
							to='/chatroom'
							className='but_link pink'>
							<h2 className='c-hero__btn-title four-btns one'>Psychology</h2>
						</Link>
					</div>
				)}
			</div>
		</React.Fragment>
	);
}

export default Above;
