import { Avatar } from "@material-ui/core";
import React from "react";
import "../CSS/Message.css";
function Message({ timestamp, user, message }) {
	return (
		<div className='message'>
			<Avatar />
			<div className='message__info'>
				<h4>
					User {Math.floor(Math.random() * 100)}
					<span className='message__timestamp'>
						{new Date(timestamp?.toDate()).toUTCString()}
					</span>
				</h4>
				<p>{message}</p>
			</div>
		</div>
	);
}

export default Message;
