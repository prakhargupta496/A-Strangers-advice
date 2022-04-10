import React, { useState, useEffect } from "react";
import "../CSS/Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import SettingsIcon from "@material-ui/icons/Settings";
import HeadsetIcon from "@material-ui/icons/Headset";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
import Logo from "../Logo.png";
import { useContext } from "react";
import { AuthContext } from "../Context/auth";
import db from "../firebase";

function Sidebar() {
	const { user } = useContext(AuthContext);
	const [channels, setChannels] = useState([]);
	useEffect(() => {
		db.collection("channels").onSnapshot((snapshot) =>
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					channel: doc.data(),
				}))
			)
		);
	}, []);
	const handleAddChannel = () => {
		const channelName = prompt("Enter a new channel name");

		if (channelName) {
			db.collection("channels").add({
				channelName: channelName,
			});
		}
	};
	const rand = Math.floor(Math.random() * 100);
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<h3>Welcome Random User {rand}</h3>
				<img src={Logo} className='image' alt='img' />
			</div>
			<div className='sidebar__channels'>
				<div className='sidebar__channelsHeader'>
					<div className='sidebar__header'>
						<ExpandMoreIcon />
						<h4>Text Channels</h4>
					</div>

					<AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
				</div>
				<div className='sidebar__channelsList'>
					{channels.map(({ id, channel }) => (
						<SidebarChannel
							key={id}
							id={id}
							channelName={channel.channelName}
						/>
					))}
				</div>
			</div>
			<div className='sidebar__voice'>
				<SignalCellularAltIcon
					className='sidebar__voiceIcon'
					fontSize='large'
				/>
				<div className='sidebar__voiceInfo'>
					<h3>Connected</h3>
					<p>Stream</p>
				</div>
				<div className='sidebar__voiceIcons'>
					<InfoOutlinedIcon />
					<CallIcon />
				</div>
			</div>
			<div className='sidebar__profile'>
				<Avatar />
				<div className='sidebar__profileInfo'>
					<h3>{user.username}</h3>
				</div>

				<div className='sidebar__profileIcons'>
					<MicIcon />
					<HeadsetIcon />
					<SettingsIcon />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
