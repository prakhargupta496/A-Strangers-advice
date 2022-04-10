import React from "react";
import MobileImg from "../Components/images/counsel-image.png";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "../CSS/counselPage.css";

export default function CounselPage() {
	return (
		<div className='counselPage'>
			<div className='counselPage-top'>
				<div className='tile-contents-wrapper'>
					<Link to='/counselroom' className='tile-counsel-link'>
						<div className='tile-contents'>
							Consult Our Counsellor <br /> (Free Service)
						</div>
					</Link>
				</div>
				<div className='tile-contents-wrapper'>
					<Link to='/map' className='tile-counsel-link'>
						<div className='tile-contents'>
							See Nearby Counsellors <br /> (Paid Service)
						</div>
					</Link>
				</div>
			</div>
			<div className='counselPage-bot'>
				<div className='counselCont'>
					<div className='counselPage-bot-left'>
						<img src={MobileImg} className='mobile-img' alt='img' />
					</div>
					<div className='counselPage-bot-right'>
						<span className='heading'>
							Benifits of our Counselling Services
						</span>
						<div className='desc-outline'>
							<CalendarTodayIcon />
							<span className='content-lines'>
								Eliminate commute time and hassle free appointments
							</span>
						</div>
						<div className='desc-outline'>
							<FavoriteBorderOutlinedIcon />
							<span className='content-lines'>
								Flexible plans that serve your lifestyle and needs
							</span>
						</div>
						<div className='desc-outline'>
							<PeopleAltOutlinedIcon />
							<span className='content-lines'>
								Seamlessly change therapists at no extra cost
							</span>
						</div>
						<div className='desc-outline'>
							<AttachMoneyIcon />
							<span className='content-lines'>
								Save money while receiving high quality care
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
