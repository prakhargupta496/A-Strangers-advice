import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "../CSS/counselMessage.css";

const Message = ({ message, username }) => {
	const isUser = username === message.username;
	return (
		<div className={`message ${isUser && "message__user"}`}>
		<div>
			<Card className={isUser ? "message__usercard" : "message__guestcard"}>
				<CardContent>
					<Typography color='white' variant='h5' component='h2'>
						{message.username}: {message.message}
					</Typography>
				</CardContent>
			</Card>
		</div>
			
		</div>
	);
};

export default Message;
