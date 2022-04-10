import React, { useEffect, useState } from "react";
import { FormControl, IconButton, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import db from "../firebase";
import Message from "./CounselMessage";
// import Logo from '../assets/images/logo.png';
import "../CSS/CounselChat.css";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

function CounselChat() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState("");
	console.log(messages);
	const name = () => {
		let enterName = "";
		while (!enterName || enterName.length > 16) {
			enterName = prompt("Please enter your name");
		}
		return enterName;
	};

	useEffect(() => {
		setUsername(name);
	}, []);

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	const updateInput = (e) => {
		setInput(e.target.value);
	};

	const sendMessage = (e) => {
		e.preventDefault();

		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: "#0b81ff",
			},
			secondary: {
				// This is green.A700 as hex.
				main: "#0b81ff",
			},
		},
	});

	return (
		<div className='counselChat'>
			<header className='counselChat__header'></header>

			<form className='counselChat__form' onSubmit={sendMessage}>
				<ThemeProvider theme={theme}>
					<FormControl className='counselChat__formControl'>
						<InputLabel value={input} onChange={updateInput}>
							Type a message...
						</InputLabel>
						<Input
							className='counselChat__input'
							color='primary'
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<IconButton
							className='counselChat__button'
							disabled={!input}
							color='primary'
							variant='contained'
							type='submit'
							onClick={sendMessage}>
							<SendIcon />
						</IconButton>
					</FormControl>
				</ThemeProvider>
			</form>

			<div className='counselChat__messageContainer'>
				{messages.map(({ id, message }) => (
					<Message key={id} username={username} message={message} />
				))}
			</div>
		</div>
	);
}

export default CounselChat;
